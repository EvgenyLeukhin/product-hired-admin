import React from "react";

import Table from '../../table';
import customFiltering from '../../table/customFiltering';
import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

class Users extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Users') }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <span>{original.name || '...'}</span>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Surname',
        accessor: 'surname',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <span>{original.surname || '...'}</span>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ original }) => <a href={`mailto:${original.email}`}>{original.email || '...'}</a>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },


      {
        Header: 'Created',
        accessor: 'created',
        width: 120,
        Cell: ({ original }) => (
          <div style={{ textAlign: 'center' }} >
            <span>{original.created.substring(0, 10) || '...'}</span>
          </div>
        ),
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Status',
        accessor: 'status',
        width: 70,
        Cell: ({ original }) => (
          <span style={{ color: original.status ? 'rgb(0,203,131)' : '#dc3545' }}>
            {original.status ? 'Active' : 'Blocked'}
          </span>
        ),
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },
    ];

    return (
      <Table
        columns={columns}
        dataPath='users'
        buttonText='user'
        startOrder='id DESC'
      />
    );
  }
}

export default withHeaderTitle(Users);
