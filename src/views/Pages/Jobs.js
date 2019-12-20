import React from "react";
import ReactTable from "react-table";
import cln from 'classnames';

import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';


class Jobs extends React.Component {
  state = {
    data: [],
    count: null,
    loading: false,
    columnName: 'id',
    sortingOrder: 'DESC', // DESC-ASC
  }

  UNSAFE_componentWillMount() {
    this.props.setHeaderTitle('Jobs');
  }

  toggleOrder = (colName) => {
    const { sortingOrder } = this.state;
    this.setState({ columnName: colName });
    sortingOrder === 'DESC' ? this.setState({ sortingOrder: 'ASC' }) : this.setState({ sortingOrder: 'DESC' })
  }

  render() {
    const columns = [
      {
        Header: () => {
          const { sortingOrder, columnName, loading } = this.state;
          return (
            <div
              onClick={this.toggleOrder.bind(this, 'id')}
              className={cln('custom-th', {
                'desc': !loading && columnName === 'id' && sortingOrder === 'DESC',
                'asc':  !loading && columnName === 'id' && sortingOrder === 'ASC'
              })}>ID</div>
          )
        },
        accessor: 'id',
        width: 60,
        Cell: ({ original }) => {
          return (
            <div style={{ textAlign: 'right' }} >
              <span>{original.id || '...'}</span>
            </div>
          )
        }
      },

      {
        Header: () => {
          const { sortingOrder, columnName, loading } = this.state;

          return (
            <div
              onClick={this.toggleOrder.bind(this, 'name')}
              className={cln('custom-th', {
                'desc': !loading && columnName === 'name' && sortingOrder === 'DESC',
                'asc':  !loading && columnName === 'name' && sortingOrder === 'ASC'
              })}>Name</div>
          )
        },
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => {
          return (
            <div title={original.description}>
              <span>{original.name || '...'}</span>
            </div>
          );
        }
      },

      {
        Header: () => {
          const { sortingOrder, columnName, loading } = this.state;
          return (
            <div
              className={cln('custom-th', {
                'desc': !loading && columnName === 'company' && sortingOrder === 'DESC',
                'asc':  !loading && columnName === 'company' && sortingOrder === 'ASC'
              })}>Company</div>
          )
        },
        accessor: 'company',
        sorting: false,
        filterable: false,
        width: 100,
        Cell: ({ original }) => <div>{original.company.name || '—'}</div>
      },

      {
        Header: () => {
          const { sortingOrder, columnName, loading } = this.state;
          return (
            <div
              onClick={this.toggleOrder.bind(this, 'locations')}
              className={cln('custom-th', {
                'desc': !loading && columnName === 'locations' && sortingOrder === 'DESC',
                'asc':  !loading && columnName === 'locations' && sortingOrder === 'ASC'
              })}>Locations</div>
          )
        },
        width: 100,
        accessor: 'locations',
        Cell: ({ original }) => {
          return (
            <div style={{ textAlign: 'center' }}>
              <span title={original.locations.map(i => `${i.name}`)}>{original.locations[0].name}</span>
            </div>
          )
        }
      },

      {
        Header: () => {
          const { sortingOrder, columnName, loading } = this.state;
          return (
            <div
              onClick={this.toggleOrder.bind(this, 'created')}
              className={cln('custom-th', {
                'desc': !loading && columnName === 'created' && sortingOrder === 'DESC',
                'asc':  !loading && columnName === 'created' && sortingOrder === 'ASC'
              })}>Created</div>
          )
        },
        width: 120,
        accessor: 'created',
        Cell: ({ original }) => (
          <div style={{ textAlign: 'center' }} >
            <span>{original.created.substring(0, 10) || '...'}</span>
          </div>
        )
      },
    ];

    const { data, loading, count, columnName, sortingOrder } = this.state;

    return (
      <div>
        <ReactTable
          pages={count}
          manual={true}
          data={data}
          loading={loading}
          resizable={true}
          // filterable={true}
          className="companies-table -striped -highlight"
          columns={columns}
          onFetchData={(state, instance) => {

            // console.log(state); //sortedData
            // own Table state
            this.setState({ loading: true });
            const pageSize = state.pageSize;
            const page = state.page;

            // fetch count
            axios.get(`${API_URL}/api/api/vacancies/count`, {
              headers: { Authorization: localStorage.getItem('ph-admin-token') }
            }).then(res => {
              this.setState({ count: Math.ceil(res.data.count / pageSize) });

            // fetch data only for 1 page
            }).then(
              axios.get(`${API_URL}/api/api/vacancies`, {
                headers: { Authorization: localStorage.getItem('ph-admin-token') },
                params: {
                  filter: {
                    "limit": pageSize,
                    "skip": page * pageSize,
                    "order": `${columnName} ${sortingOrder}`
                  }
                }
              }).then(res => { this.setState({ loading: false, data: res.data }) })
            )
          }}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Jobs);
