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
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%', height: '38px' }}
        debounceTimeout={800}
      />
    ),
  },
  {
    Header: 'Skill',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      const { name, id } = original;
      return (
        <div className="table-column-name  ellipsis-text" title={name || ''}>
          <NavLink to={`/skills/${id}`}>
            {name || ''}
          </NavLink>
        </div>
      );
    },
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
    Header: 'Slug',
    accessor: 'slug',
    Cell: ({ original }) => {
      const { slug } = original;
      return (
        <div className="ellipsis-text" title={slug || ''}>{slug || ''}</div>
      );
    },
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
    Header: 'Aliases',
    accessor: 'markers',
    Cell: ({ original }) => {
      const { markers } = original;
      return (
        <div className="ellipsis-text" title={markers || ''}>{markers || ''}</div>
      );
    },
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
    Header: 'Weight',
    accessor: 'weight',
    width: 60,
    Cell: ({ original }) => {
      const { weight } = original;
      return (
        <div className="ellipsis-text" title={weight || ''}>{weight || ''}</div>
      );
    },
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

// filterMethod: (filter, row) => {
//   const id = filter.pivotId || filter.id;
//   return (
//     row[id] !== undefined ?
//       String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
//   );
// }
