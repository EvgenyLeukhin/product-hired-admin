import React from 'react';
import { NavLink } from 'react-router-dom';

import { Input } from 'debounce-input-decorator';

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => {
      const { id } = original;
      return (
        <div className="ellipsis-text" title={id || ''}>{id || ''}</div>
      );
    },
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={e => onChange(e.target.value)}
        style={{ width: '100%', height: '38px' }}
        debounceTimeout={800}
      />
    ),
  },
  {
    Header: 'Plan',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      const { name, id } = original;
      return (
        <div className="table-column-name  ellipsis-text" title={name || ''}>
          <NavLink to={`/plans/${id}`}>
            {name || ''}
          </NavLink>
        </div>
      );
    },
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={e => onChange(e.target.value)}
        style={{ width: '100%', height: '38px' }}
        debounceTimeout={800}
      />
    ),
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: ({ original }) => {
      const { price } = original;
      return (
        <div className="ellipsis-text" title={`$${price}` || ''}>{`$${price}` || ''}</div>
      );
    },
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={e => onChange(e.target.value)}
        style={{ width: '100%', height: '38px' }}
        debounceTimeout={800}
      />
    ),
  },
];

export default columns;
