// filtering +++
// прописать catch для запросов
// save user data in one object in localStorage
// checking admin rights when login
// catch 401 error -> redirect to login

import React from "react";
import ReactTable from "react-table";
import axios from 'axios';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import noLogo from './../../img/no-logo.jpg';
import API_URL from '../../consts/apiUrl';

class Jobs extends React.Component {
  state = {
    data: [],
    count: null,
    loading: false,
  }

  // inject title text
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Jobs') }

  render() {
    // table columns
    const columns = [
      {
        Header: 'ID',
        accessor: 'id',
        width: 60,
        Cell: ({ original }) => (
          <div style={{ textAlign: 'right' }}>
            <span>{original.id || '...'}</span>
          </div>
        )
      },

      {
        Header: 'Name',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => (
          <div>
            <span>{original.name || '...'}</span>
          </div>
        )
      },

      {
        Header: 'Location',
        accessor: 'locations',
        width: 200,
        sortable: false,
        filterable: false,
        Cell: ({ original }) => (
          <div style={{ textAlign: 'center' }}>
            <span>{original.locations.map(i => `${i.name} `)}</span>
          </div>
        )
      },

      {
        Header: 'Created',
        accessor: 'created',
        width: 120,
        Cell: ({ original }) => (
          <div style={{ textAlign: 'center' }}>
            <span>{original.created.substring(0, 10) || '...'}</span>
          </div>
        )
      },
    ];

    const { data, loading, count } = this.state;

    return (
      <div>
        <ReactTable
          pages={count}
          manual={true}
          data={data}
          loading={loading}
          resizable={true}
          filterable={true}
          className="-striped -highlight"
          columns={columns}
          onFetchData={state => {
            // use ReactTable own state to forming a request
            // it refresh always when we're doing any actions with this table
            // console.log(state);

            const { pageSize, page, sorted, filtered } = state;

            this.setState({ loading: true });

            // filter template for request
            const filter = {
              where: {},
              limit: pageSize,
              skip: page * pageSize,
              order: 'id DESC' // id DESC - by default
            };

            // inject values to filter object when we fill data to filter inputs
            filtered.forEach(i => {
              if (i.id === 'id') filter.where[i.id] = i.value
              else               filter.where[i.id] = { 'like': i.value + '%' }
            });

            // inject data to order when we click sorting
            sorted.forEach(i => {
              const desc = i.desc ? 'DESC' : 'ASC'
              filter.order = `${i.id} ${desc}`;
            });


            // fetch only count
            axios.get(`${API_URL}/api/api/vacancies/count`, {
              // params for get count when we have filled filters
              params: { where: filter.where },
              headers: { Authorization: localStorage.getItem('ph-admin-token') },
            }

            ).then(res => {
              // save count to coponent state
              // res.data.count - all items inside response
              // count - we find pages-count to add to Table property pages
              this.setState({ count: Math.ceil(res.data.count / pageSize) });

            // fetch data only for 1 page
            }).then(
              axios.get(`${API_URL}/api/api/vacancies`, {
                params: { filter },
                headers: { Authorization: localStorage.getItem('ph-admin-token') }

              }).then(res => {
                console.log(res.data);
                this.setState({
                  // save data to component state
                  data: res.data,
                  loading: false
                });

                // TODO catch errors
              }).catch(error => { console.log(error) })
            )
          }}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Jobs);
