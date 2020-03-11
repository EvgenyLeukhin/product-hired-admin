import React from "react";
import planOptions      from './api/planOptions';

import customFiltering from './../../components/Table/customFiltering';


const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => original.id || '...',
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Job',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      if (original.name) {
        return `${original.name}`;
      } else return `...`;
    },
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Company',
    accessor: 'company',
    sortable: false,
    filterable: false,
    Cell: ({ original }) => {
      if (original.company) {
        return `${original.company.name}`;
      } else return `...`;
    },
  },
  {
    Header: 'Locations',
    accessor: 'locations',
    sortable: false,
    filterable: false,
    Cell: ({ original }) => {
      const { length } = original.locations;

      if (length > 1) {
        return original.locations.map(i => `${i.name}, `);
      } else return original.locations.map(i => i.name);
    },
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 60,
    Cell: ({ original }) => <div style={{ textAlign: 'center' }}>{original.status || '...'}</div>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Plan',
    accessor: 'plan_id',
    filterable: false,
    width: 50,
    Cell: ({ original }) => {
      const { plan_id } = original;
      return (
        <div>{ planOptions.map(i => plan_id === i.value && i.label) }</div>
      );
    },
    // Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Created',
    accessor: 'created',
    filterable: false,
    width: 85,
    Cell: ({ original }) => {
      return (
        <div style={{ textAlign: 'center' }}>
          <span>{original.created && original.created.substring(0, 10) || '...'}</span>
        </div>
      )
    },
    // Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Published',
    accessor: 'published',
    filterable: false,
    width: 85,
    Cell: ({ original }) => {
      return (
        <div style={{ textAlign: 'center' }}>
          <span>{original.published && original.published.substring(0, 10) || '...'}</span>
        </div>
      )
    },
    // Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  }
];

export default columns;
