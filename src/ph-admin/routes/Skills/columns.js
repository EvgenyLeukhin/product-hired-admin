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
        style={{ width: '100%' }}
        debounceTimeout={800}
      />
    ),
  },
  {
    Header: 'Skill',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => original.name || '',
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%' }}
        debounceTimeout={800}
      />
    ),
    // filterMethod: (filter, row) => {
    //   const id = filter.pivotId || filter.id;
    //   return (
    //     row[id] !== undefined ?
    //       String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
    //   );
    // }
  },
  {
    Header: 'Slug',
    accessor: 'slug',
    Cell: ({ original }) => original.slug || '',
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%' }}
        debounceTimeout={800}
      />
    ),
    // filterMethod: (filter, row) => {
    //   const id = filter.pivotId || filter.id;
    //   return (
    //     row[id] !== undefined ?
    //       String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
    //   );
    // }
  },
  {
    Header: 'Aliases',
    accessor: 'markers',
    Cell: ({ original }) => original.markers || '',
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%' }}
        debounceTimeout={800}
      />
    ),
    // filterMethod: (filter, row) => {
    //   const id = filter.pivotId || filter.id;
    //   return (
    //     row[id] !== undefined ?
    //       String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
    //   );
    // }
  },
  {
    Header: 'Weight',
    accessor: 'weight',
    width: 60,
    Cell: ({ original }) => original.weight || '',
    Filter: ({ filter, onChange }) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%' }}
        debounceTimeout={800}
      />
    ),
  },
];

export default columns;
