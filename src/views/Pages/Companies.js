import React from "react";
import ReactTable from "react-table";

import matchSorter from 'match-sorter';

import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';


class Companies extends React.Component {
  state = {
    loading: false,
    error: false,
    companies: []
  }

  UNSAFE_componentWillMount() {
    this.props.setHeaderTitle('Companies');
  }

  componentDidMount() {
    const userToken = localStorage.getItem('ph-admin-token');

    axios.get(`${API_URL}/api/api/companies`, {
        headers: { Authorization: userToken }
    })
        .then(this.setState({ loading: true }))

        .then(res => {
          console.log(res.data);
            this.setState({ 
              companies: res.data,
              loading: false,
            });
            console.log(res);
        })

        .catch(error => {
          console.log(error);
          this.setState({ 
            error: true,
            loading: false,
          });
        })
  }

  render() {
    const { companies, loading } = this.state;

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
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['name'] }),
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
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['domain'] }),
        filterAll: true,
        Cell: ({ original }) => {
          return (
            <a href={`http://${original.domain}`} target="_blank" rel="noopener noreferrer">{original.domain}</a>
          );
        }
      },
    ];
    
    return (
      <div>
        <ReactTable
          className="-striped -highlight"
          data={companies}
          columns={columns}
          filterable={true}
          resizable={true}
          loading={loading}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Companies);
