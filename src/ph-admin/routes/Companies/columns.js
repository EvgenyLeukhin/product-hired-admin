import React from "react";

import customFiltering from './../../components/Table/customFiltering';
import noLogo from './no-logo.jpg';

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
    Header: 'Company name',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => (
      <div>
        <img src={original.logo || noLogo} width={20} height={20} />
        &nbsp;&nbsp;
        <span>{original.name || ''}</span>
      </div>
    ),
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },

  {
    Header: 'Domain',
    accessor: 'domain',
    Cell: ({ original }) => {
      if (original.domain) {
        return (
          <a href={`http://${original.domain}`} target="_blank" rel="noopener noreferrer">{original.domain}</a>
        );
      } else return '';
    },
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },

  {
    Header: 'Slug',
    accessor: 'slug',
    Cell: ({ original }) => <div>{original.slug || ''}</div>,
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },

  // {
  //   Header: 'Weight',
  //   accessor: 'weight',
  //   width: 60,
  //   Cell: ({ original }) => <div>{original.weight || ''}</div>,
  //   Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  // }
];

export default columns;
