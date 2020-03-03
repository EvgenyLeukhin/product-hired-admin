import React from "react";

import customFiltering from './../../components/Table/customFiltering';


const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => <div>{original.id || '...'}</div>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Job',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => <div>{original.name || '...'}</div>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Company',
    accessor: 'company',
    sortable: false,
    filterable: false,
    Cell: ({ original }) => {
      // fix it later
      if (original.company) {
        return <div>{original.company.name}</div>
      } else return <div>...</div>
    },
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 60,
    Cell: ({ original }) => <div>{original.status || '...'}</div>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Created',
    accessor: 'created',
    width: 120,
    Cell: ({ original }) => (
      <div style={{ textAlign: 'center' }}>
        <span>{original.created.substring(0, 10) || '...'}</span>
      </div>
    ),
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  }
];

export default columns;
