import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'debounce-input-decorator';

const columns = [

  // id //
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

  // name //
  {
    Header: 'Page title',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      const { id, name } = original;
      return (
        <div className="table-column-name  ellipsis-text" title={`${name} some PH page`}>
          <NavLink to={`/pages-for-advertising/${id}`}>{`${name} some PH page`}</NavLink>
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

  // domain //
  // email --> domain (when be will be ready)
  {
    Header: 'Page URL/Template',
    accessor: 'email',
    Cell: ({ original }) => {
      const { email } = original;
      if (email) {
        return (
          <div className="ellipsis-text">
            <a
              href={`https://producthired.com/${email}`}
              title={`https://producthired.com/${email}`}
              target="_blank"
              rel="noopener noreferrer">
                {`https://producthired.com/${email}`}
            </a>
          </div>
        )
      } else return '';
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

  // status //
  // adminVerified --> status (when be will be ready)
  {
    Header: 'Status',
    accessor: 'adminVerified',
    width: 120,
    Cell: ({ original }) => {
      const { adminVerified } = original;
      return (
        <div className="ellipsis-text">{adminVerified ? 'Active' : 'Not active'}</div>
      );
    },
    Filter: ({ filter, onChange }) => {
      return (
        <select
          onChange={
            event => {
              if (event.target.value === 'Null') return onChange(null);
              else                               return onChange(event.target.value);
            }
          }
          style={{ width: "100%", height: '38px' }}
          value={filter ? filter.value : ''}
        >
          <option value=''>All</option>
          <option value={true}>Active</option>
          <option value={false}>Not active</option>
        </select>
      )
    }
  }
];

export default columns;
