import React from "react";
import ReactTable from "react-table";

import matchSorter from 'match-sorter';

import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';


class Companies extends React.Component {
  state = {
    data: [],
    count: null,
    loading: false,
  }

  UNSAFE_componentWillMount() {
    this.props.setHeaderTitle('Companies');
  }

  render() {
    const columns = [
      {
        Header: 'ID',
        accessor: 'id',
        width: 60,
        Cell: ({ original }) => {
          return (
            <div style={{ textAlign: 'right' }}>
              <span>{original.id}</span>
            </div>
          );
        }
      },
      {
        Header: 'Name',
        accessor: 'name',
        id: 'name',
        accessor: d => d.name,
        // filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['name'] }),
        filterAll: true,
        Cell: ({ original }) => {
          return (
            <div>
              <img src={original.logo} width={20} height="auto" />
              &nbsp;&nbsp;
              <span>{original.name}</span>
            </div>
          );
        }
      },
      {
        Header: 'Domain',
        accessor: 'domain',
        id: 'domain',
        accessor: d => d.domain,
        // filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['domain'] }),
        filterAll: true,
        Cell: ({ original }) => {
          return (
            <a href={`http://${original.domain}`} target="_blank" rel="noopener noreferrer">{original.domain}</a>
          );
        }
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
          sortable={false}
          className="-striped -highlight"
          columns={columns}
          onFetchData={(state, instance) => {

            // own Table state
            console.log(instance);
            this.setState({ loading: true });
            const pageSize = state.pageSize;
            const page = state.page;

            // fetch count
            axios.get(`${API_URL}/api/api/companies/count`, {
              headers: { Authorization: localStorage.getItem('ph-admin-token') }
            }).then(res => {
              this.setState({
                count: Math.ceil(res.data.count / pageSize),
              });

            // fetch data only for 1 page
            }).then(
              axios.get(`${API_URL}/api/api/companies`, {
                headers: { Authorization: localStorage.getItem('ph-admin-token') },
                params: {
                  filter: {
                    "limit": pageSize,
                    "skip": page * pageSize,
                    "order":"id DESC"
                  }
                }
              }).then(res => {
                this.setState({ loading: false, data: res.data });
              })
            )
          }}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Companies);
