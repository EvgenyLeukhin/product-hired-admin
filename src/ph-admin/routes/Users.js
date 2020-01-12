import React from "react";

import Table from '../../ph-admin/table';
import customFiltering from '../table/customFiltering';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Users extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Users') }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => {
          // console.log(original);
          return (
            <>
              <span style={{ color: !original.status ? '#dc3545' : 'rgb(0,203,131)' }}>● </span>
              <span>{`${original.name} ${original.surname} ` || '...'}</span>
              {
                original.roles.map(i => {
                  return i.name === 'admin' && <span style={{ color: '#ccc'}}>{'[admin]'}</span>
                })
              }
            </>
          )
        },
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ original }) => <a href={`mailto:${original.email}`}>{original.email || '—'}</a>,
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
    ];

    return <Table columns={columns} dataPath='users' />;
  }
}

export default withHeaderTitle(Users);
