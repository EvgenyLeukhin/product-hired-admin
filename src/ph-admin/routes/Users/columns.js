import React from "react";

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
    accessor: 'userRole',
    filterable: false,
    width: 70,
    Cell: ({ original }) => {
      const userRole = original.userRole;
      return (
        <dib>
          {
            userRole ? (
              userRole.id && userRole.id === 1 && 'Talent' ||
              userRole.id && userRole.id === 2 && 'Both' ||
              userRole.id && userRole.id === 3 && 'Recruiter'
            ) : ''

          }
        </dib>
      );
    },
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
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
