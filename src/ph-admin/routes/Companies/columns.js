import React from 'react';

import { Input } from 'debounce-input-decorator';

import noLogo from './no-logo.jpg';

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
    Header: 'Company name',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      const { logo, name } = original;
      return (
        <div>
          <img title={logo || ''} src={logo || noLogo} width={20} height={20} style={{ objectFit: 'cover' }} />
          &nbsp;&nbsp;
          <span title={name || ''}>{name || ''}</span>
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
  {
    Header: 'Domain',
    accessor: 'domain',
    Cell: ({ original }) => {
      const { domain } = original;
      if (domain) {
        return (
          <div className="ellipsis-text">
            <a href={`http://${domain}`} title={`http://${domain}`} target="_blank" rel="noopener noreferrer">{domain}</a>
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

  // slug //
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
  }
];

export default columns;
