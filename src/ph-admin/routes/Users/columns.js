import React from 'react';

import customFiltering from './../../components/Table/customFiltering';


const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => <div>{original.id || ''}</div>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Name',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => <span>{original.name || ''}</span>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },

  {
    Header: 'Last name',
    accessor: 'surname',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => <span>{original.surname || ''}</span>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },

  {
    Header: 'Email',
    accessor: 'email',
    Cell: ({ original }) => {
      return (
        <a
          href={`mailto:${original.email}`}
          onClick={e => e.stopPropagation()}
        >
          {original.email || ''}
        </a>
      );
    },
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },

  {
    Header: 'Role',
    accessor: 'user_role_id',
    width: 100,
    Cell: ({ original }) => {
      const { user_role_id } = original;
      console.log(user_role_id);
      return (
        <dib>
          {
            user_role_id ? (
              user_role_id === 1      && 'Talent' ||
              user_role_id === 2      && 'Both' ||
              user_role_id === 3      && 'Recruiter'
            ) : 'Null'
          }
        </dib>
      );
    },
    Filter: ({ filter, onChange }) => {
      return (
        <select
          onChange={
            event => {
              if (event.target.value === 'Null') {
                return onChange(null);
              } else return onChange(event.target.value);
            }
          }
          style={{ width: "100%" }}
          value={filter ? filter.value : ''}
        >
          <option value=''>Show all</option>
          <option value={null}>Null</option>
          <option value={1}>Talent</option>
          <option value={2}>Both</option>
          <option value={3}>Recruiter</option>
        </select>
      )
    }
  },


  {
    Header: 'Created',
    accessor: 'created',
    width: 120,
    Cell: ({ original }) => {
      return (
        <div style={{ textAlign: 'center' }}>
          <span>{original.created.substring(0, 10) || ''}</span>
        </div>
      )
    },
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

export default columns;
