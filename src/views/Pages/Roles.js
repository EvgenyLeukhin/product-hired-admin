import React from "react";
import ReactTable from "react-table";

import matchSorter from 'match-sorter';

import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';


class Roles extends React.Component {
  state = {
    loading: false,
    roles: []
  }

  UNSAFE_componentWillMount() {
    this.props.setHeaderTitle('Roles');
  }

  componentDidMount() {
    const userToken = localStorage.getItem('ph-admin-token');

    axios.get(`${API_URL}/api/api/user_roles`, {
        headers: { Authorization: userToken }
    })
        .then(this.setState({ loading: true }))

        .then(res => {
            this.setState({ 
              roles: res.data,
              loading: false,
            });
        })
  }

  render() {
    const { roles } = this.state;

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
        filterAll: true
      }
    ];
    
    return (
      <div>
        <ReactTable
          className="-striped -highlight"
          data={roles}
          columns={columns}
          filterable={true}
          resizable={true}
        />

      </div>
    );
  }
}

export default withHeaderTitle(Roles);