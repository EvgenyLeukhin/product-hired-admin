import React from 'react';

import { Input } from 'debounce-input-decorator';

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => original.id || '',
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%', height: '38px' }}
        debounceTimeout={800}
      />
    ),
  },
  {
    Header: 'Plan',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => original.name || '',
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%', height: '38px' }}
        debounceTimeout={800}
      />
    ),
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: ({ original }) => `$${original.price}` || '',
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%', height: '38px' }}
        debounceTimeout={800}
      />
    ),
  },
];

export default columns;
