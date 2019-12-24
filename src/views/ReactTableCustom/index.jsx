import React from "react";
import ReactTable from "react-table";
import axios from 'axios';

import API_URL from '../../consts/apiUrl';

class ReactTableCustom extends React.Component {
  state = {
    data: [],
    count: null,
    loading: false,
  }

  edit = id => () => {
    alert(id);
  }

  delete = id => () => {
    const { dataPath } = this.props;

    const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));
    const token = userData && userData.id;

    // console.log(`${API_URL}/api/api/${dataPath}/${id}`);

    // delete request
    axios.delete(
      `${API_URL}/api/api/${dataPath}/${id}`,
      {
        // headers: { Authorization: token }
        headers: { Authorization: null }
      }
    ).then(res => {
      console.log(res);
      alert('ok!');

    }).catch(error => {
      console.log(error);
      alert('not ok!');
    })
  }

  render() {
    const { columns, dataPath, order } = this.props;
    const { data, loading, count } = this.state;

    const idColumn = [
      {
        Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div>
      }
    ];

    const controlsColumn = [
      {
        Header: 'Controls',
        width: 80,
        Cell: ({ original }) => {
          const { id } = original;

          return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span onClick={this.edit(id)}>Edit</span>
              <span onClick={this.delete(id)}>Delete</span>
            </div>
          )
        }
      }
    ];

    return (
      <div>
        <ReactTable
          manual={true}
          pages={count}
          data={data}
          loading={loading}
          resizable={true}
          filterable={true}
          className="-striped -highlight"
          columns={[...idColumn, ...columns, ...controlsColumn]}
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
              order: order // id DESC - by default
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

            // get token
            const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));
            const token = userData && userData.id;

            // fetch only count
            axios.get(`${API_URL}/api/api/${dataPath}/count`, {
              // params for get count when we have filled filters
              params: { where: filter.where },
              headers: { Authorization: token },
            }

            ).then(res => {
              // save count to coponent state
              // res.data.count - all items inside response
              // count - we find pages-count to add to Table property pages
              this.setState({ count: Math.ceil(res.data.count / pageSize) });

            // fetch data only for 1 page
            }).then(
              axios.get(`${API_URL}/api/api/${dataPath}`, {
                params: { filter },
                headers: { Authorization: token }

              }).then(res => {
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

export default ReactTableCustom;
