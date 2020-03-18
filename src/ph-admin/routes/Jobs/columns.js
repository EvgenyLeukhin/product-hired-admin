import React from 'react';
import AsyncSelect from 'react-select/async';

import getUsers        from './api/getUsers';
import planOptions      from './api/planOptions';

import customFiltering from './../../components/Table/customFiltering';

import './selects.scss';


const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => original.id || '',
    Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  },
  {
    Header: 'Job',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      const { name } = original;
      if (name) {
        return (
          <div title={name} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {name}
          </div>
        )
      } else return '';
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
      // console.log(original);
      return original.locations && original.locations.map(i => {
        return i.alias_region ? `${i.name}, ${i.alias_region}` : i.name
      }).join('; ') || ''
    }
  },
  {
    Header: 'User',
    accessor: 'employer',
    width: 120,
    Cell: ({ original }) => {
      const { name, surname, email } = original.employer;
      return (
        <div
          title={`${name} ${surname}, ${email}`}
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {`${name} ${surname}`}
        </div>
      )
    },
    Filter: ({ filter, onChange }) => {
      const customStyles = {

        // dropdown menu
        menu: (provided) => {
          return {
            ...provided,
            textAlign: 'left',
            width: 320,
          }
        },

        // control
        control: (provided) => {
          console.log(provided);
          return {
            ...provided,
            padding: 0,
            minHeight: 28,
            height: 28,
            border: '1px solid rgba(0,0,0,0.1)',
          }
        },

        // single options
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          minHeight: '22px'
        }),
      }
      return (
        <AsyncSelect
          className="jobs-user-select"
          isClearable={true}
          styles={customStyles}
          menuPlacement="auto"
          cacheOptions={true}
          defaultOptions={true}
          loadOptions={inputValue => getUsers(inputValue).then(res => res.data)}
          getOptionValue={o => o.id}
          getOptionLabel={o => (
            <div>
              <span>{`${o.name} ${o.surname} `}</span>
              <span style={{ color: '#3498db', textShadow: '1px 1px 0 #fff' }}>
                {o.email}
              </span>
            </div>
          )}
          onChange={onChange}
          value={filter ? filter.value : ''}
        />
      );
    }
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 85,
    Cell: ({ original }) => original.status || '',
    Filter: ({ filter, onChange }) => {
      return (
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%', height: '28px' }}
          value={filter ? filter.value : ''}
        >
          <option value=''>All</option>
          <option value='draft'>Draft</option>
          <option value='public'>Public</option>
          <option value='expired'>Expired</option>
        </select>
      )
    }
  },
  {
    Header: 'Plan',
    accessor: 'plan_id',
    width: 80,
    Cell: ({ original }) => {
      const { plan_id } = original;
      return planOptions.map(i => plan_id === i.value && i.label)
    },
    Filter: ({ filter, onChange }) => {
      return (
        <select
          onChange={
            event => {
              if (event.target.value === 'Null') {
                return onChange(null);
              } else return onChange(Number(event.target.value));
            }
          }
          style={{ width: '100%', height: '28px' }}
          value={filter ? filter.value : ''}
        >
          <option value=''>All</option>
          <option value={null}>Null</option>
          <option value={1}>Free</option>
          <option value={2}>Bronze</option>
          <option value={3}>Silver</option>
          <option value={4}>Gold</option>
        </select>
      )
    }
  },
  {
    Header: 'Created',
    accessor: 'created',
    filterable: false,
    width: 85,
    Cell: ({ original }) => {
      return (
        <div style={{ textAlign: 'center' }}>
          <span>{original.created && original.created.substring(0, 10) || ''}</span>
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
          <span>{original.published && original.published.substring(0, 10) || ''}</span>
        </div>
      )
    },
    // Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
  }
];

export default columns;
