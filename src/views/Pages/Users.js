import React from "react";
import ReactTable from "react-table";

import matchSorter from 'match-sorter';

import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';


class Users extends React.Component {
  state = {
    loading: false,
    users: []
  }

  UNSAFE_componentWillMount() {
    this.props.setHeaderTitle('Users');
  }

  componentDidMount() {
    const userToken = localStorage.getItem('ph-admin-token');

    axios.get(`${API_URL}/api/api/users`, {
        headers: { Authorization: userToken }
    })
        .then(this.setState({ loading: true }))

        .then(res => {
            this.setState({ 
              users: res.data,
              loading: false,
            });
        })

        .catch(error => {
          console.log(error)
          this.setState({ loading: false });
        });
  }

  render() {
    const { users, loading } = this.state;

    const columns = [
      { 
        Header: 'ID',
        accessor: 'id',
        width: 60,
        // sortDescFirst: true,
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
        id: 'name',
        accessor: d => d.name + d.surname,
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['name'] }),
        filterAll: true,
        Cell: ({ original }) => {
          const { name, surname } = original; 
          return (
            <span>{`${name} ${surname}`}</span>
          );
        }
      },
      { 
        Header: 'Roles',
        id: 'roles',
        accessor: 'roles',
        width: 150,
        filterAll: true,
        Cell: ({ original }) => {
          const { roles } = original;

          return (
            <span>{roles[0] ? roles[0].name : '—'}</span>
          );
        }
      },
      { 
        Header: 'E-mail', 
        accessor: 'email',
        id: 'email',
        width: 250,
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['email'] }),
        filterAll: true,
        Cell: ({ original }) => {
          return (
            <a href={`mailto:http://${original.email}`} target="_blank" rel="noopener noreferrer">{original.email}</a> || '—'
          );
        }
      },
      { 
        Header: 'Created',
        width: 100,
        accessor: 'created',
        filterable: false,
        Cell: ({ original }) => {
          const { created } = original;

          return (
            <span>{created.substring(0, 10) || '—'}</span>
          );
        }
      },
    ];
    
    return (
      <div>
        <ReactTable
          className="-striped -highlight"
          loading={loading}
          data={users}
          columns={columns}
          filterable={true}
          resizable={true}
        />

      </div>
    );
  }
}

export default withHeaderTitle(Users);
