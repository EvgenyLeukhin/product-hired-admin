import React from "react";
import ReactTable from "react-table";
import cln from 'classnames';

import noLogo from './../../img/no-logo.jpg';

// import matchSorter from 'match-sorter';
// filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['name'] }),
// filterAll: true,

import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';


class Companies extends React.Component {
  state = {
    data: [],
    count: null,
    loading: false,
    columnName: 'id',
    sortingOrder: 'DESC', // DESC-ASC
  }

  UNSAFE_componentWillMount() {
    this.props.setHeaderTitle('Companies');
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
              })}
            >
              ID
            </div>
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
              })}
            >
              Name
            </div>
          )
        },
        accessor: 'name',
        id: 'name',
        style: { fontWeight: 'bold' },
        accessor: d => d.name,
        Cell: ({ original }) => {
          return (
            <div>
              <img src={original.logo || noLogo} width={20} height="auto" />
              &nbsp;&nbsp;
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
              onClick={this.toggleOrder.bind(this, 'domain')}
              className={cln('custom-th', {
                'desc': !loading && columnName === 'domain' && sortingOrder === 'DESC',
                'asc':  !loading && columnName === 'domain' && sortingOrder === 'ASC'
              })}
            >
              Domain
            </div>
          )
        },
        accessor: 'domain',
        id: 'domain',
        accessor: d => d.domain,
        Cell: ({ original }) => {
          if (original.domain) {
            return (
              <a href={`http://${original.domain}`} target="_blank" rel="noopener noreferrer">{original.domain}</a>
            );
          } else return <div>...</div>;
        }
      },

      {
        Header: () => {
          const { sortingOrder, columnName, loading } = this.state;
          return (
            <div
              onClick={this.toggleOrder.bind(this, 'slug')}
              className={cln('custom-th', {
                'desc': !loading && columnName === 'slug' && sortingOrder === 'DESC',
                'asc':  !loading && columnName === 'slug' && sortingOrder === 'ASC'
              })}
            >
              Slug
            </div>
          )
        },
        accessor: 'slug',
        id: 'slug',
        accessor: d => d.slug,
        Cell: ({ original }) => <div>{original.slug || '...'}</div>
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
                    "order": `${columnName} ${sortingOrder}`
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
