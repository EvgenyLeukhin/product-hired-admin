import React from 'react';
import DatePicker from 'react-datepicker';

import AsyncSelect from 'react-select/async';
import { Input } from 'debounce-input-decorator';

import getUsers        from './api/getUsers';
import getCompanies    from './api/getCompanies';
import getLocations    from './api/getLocations';
import planOptions     from './api/planOptions';

// import customFiltering from './../../components/Table/customFiltering';

import 'react-datepicker/dist/react-datepicker.css';
import './selects.scss';


const customStyles = {
  // dropdown menu
  menu: (provided) => {
    return { ...provided, textAlign: 'left', width: 320 }
  },
  // control
  control: (provided) => {
    return { ...provided, padding: 0, border: '1px solid rgba(0,0,0,0.1)' }
  },
  // single options
  option: (provided, state) => ({ ...provided, borderBottom: '1px solid rgba(0,0,0,0.1)', minHeight: '22px' }),
};

const customStyles2 = {
  // dropdown menu
  menu: (provided) => {
    return { ...provided, textAlign: 'left'}
  },
  // control
  control: (provided) => {
    return { ...provided, padding: 0, border: '1px solid rgba(0,0,0,0.1)' }
  },
  // single options
  option: (provided, state) => ({ ...provided, borderBottom: '1px solid rgba(0,0,0,0.1)', minHeight: '22px' }),
};

const columns = [

  // id //
  {
    Header: 'Id',
    accessor: 'id',
    width: 65,
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
        style={{ width: '100%', minHeight: '38px' }}
        debounceTimeout={800}
      />
    ),
  },

  // name //
  {
    Header: 'Job',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      const { name } = original;
      if (name) {
        return (
          <div className="table-column-name  ellipsis-text" title={name}>
            {name}
          </div>
        )
      } else return '';
    },
    Filter: ({filter, onChange}) => (
      <Input
        value={filter ? filter.value : ''}
        onChange={event => onChange(event.target.value)}
        style={{ width: '100%', minHeight: '38px' }}
        debounceTimeout={800}
      />
    ),
  },

  // company //
  {
    Header: 'Company',
    accessor: 'company',
    sortable: false,
    width: 200,
    Cell: ({ original }) => {
      const { company } = original;
      if (company) {
        return (
          <div className="ellipsis-text" title={company.name}>
            {company.name}
          </div>
        )
      } else return '';
    },
    Filter: ({ filter, onChange }) => {
      return (
        <AsyncSelect
          className="jobs-company-select"
          placeholder="Select companies..."
          isMulti={true}
          isClearable={true}
          styles={customStyles2}
          menuPlacement="auto"
          cacheOptions={true}
          defaultOptions={true}
          loadOptions={inputValue => getCompanies(inputValue).then(res => res.data)}
          getOptionValue={o => o.id}
          getOptionLabel={o => <div title={`${o.name}, ${o.domain}`}>{o.name || ''}</div>}
          onChange={onChange}
          value={filter ? filter.value : ''}
        />
      );
    }
  },

  // locations //
  {
    Header: 'Locations',
    accessor: 'locations',
    width: 200,
    sortable: false,
    Cell: ({ original }) => {
      const { locations } = original;
      const locationsMaping = () => locations.map(i => {
        return i.alias_region ? `${i.name}, ${i.alias_region}` : i.name
      }).join('; ') || '';

      return locations && (
        <div className="text-ellipsis" title={locationsMaping()}>
          {locationsMaping()}
        </div>
      )
    },
    Filter: ({ filter, onChange }) => {
      return (
        <AsyncSelect
          className="jobs-locations-select"
          placeholder="Select locations..."
          isMulti={true}
          isClearable={true}
          styles={customStyles2}
          menuPlacement="auto"
          cacheOptions={true}
          defaultOptions={true}
          loadOptions={inputValue => getLocations(inputValue).then(res => res.data)}
          getOptionValue={o => o.id}
          getOptionLabel={o => (
            <div>
              <span>{`${o.name}, ` || ''}</span>
              <span style={{ color: '#3498db', textShadow: '1px 1px 0 #fff' }}>
                {o.alias_region || ''}
              </span>
            </div>
          )}
          onChange={onChange}
          value={filter ? filter.value : ''}
        />
      );
    }
  },

  // employer //
  {
    Header: 'User',
    accessor: 'employer',
    width: 150,
    sortable: false,
    Cell: ({ original }) => {
      const { name, surname, email } = original.employer;
      return (
        <div
          title={`${name} ${surname}, ${email}`  || ''}
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {`${name} ${surname}` || ''}
        </div>
      )
    },
    Filter: ({ filter, onChange }) => {
      return (
        <AsyncSelect
          className="jobs-user-select"
          placeholder="Select user..."
          isClearable={true}
          styles={customStyles}
          menuPlacement="auto"
          cacheOptions={true}
          defaultOptions={true}
          loadOptions={inputValue => getUsers(inputValue).then(res => res.data)}
          getOptionValue={o => o.id}
          getOptionLabel={o => (
            <div>
              <span>{`${o.name} ${o.surname}, `}</span>
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

  // status //
  {
    Header: 'Status',
    accessor: 'status',
    width: 85,
    Cell: ({ original }) => {
      const { status } = original;
      return (
        <div className="ellipsis-text" title={status || ''}>{status || ''}</div>
      );
    },
    Filter: ({ filter, onChange }) => {
      return (
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%', height: '38px' }}
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

  // plan_id //
  {
    Header: 'Plan',
    accessor: 'plan_id',
    width: 80,
    Cell: ({ original }) => {
      const { plan_id } = original;
      return planOptions.map(i => plan_id === i.value && (
        <div className="ellipsis-text" title={i.label}>{i.label}</div>
      ));
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
          style={{ width: '100%', height: '38px' }}
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

  // created //
  {
    Header: 'Created',
    accessor: 'created',
    width: 120,
    Cell: ({ original }) => {
      const { created } = original;
      return (
        <div className="ellipsis-text" title={created && created.substring(0, 10) || ''}>
          <span>{created && created.substring(0, 10) || ''}</span>
        </div>
      );
    },
    Filter: ({ filter, onChange }) => {
      return (
        <DatePicker
          placeholderText="Select date..."
          isClearable={filter ? true : false}
          className="created-datepicker"
          selected={filter ? filter.value : ''}
          onChange={date => onChange(date)}
        />
      );
    }
  },

  // published //
  {
    Header: 'Published',
    accessor: 'published',
    width: 120,
    Cell: ({ original }) => {
      const { published } = original;
      return (
        <div className="ellipsis-text" title={published && published.substring(0, 10) || ''}>
          <span>{published && published.substring(0, 10) || ''}</span>
        </div>
      )
    },
    Filter: ({ filter, onChange }) => {
      return (
        <DatePicker
          placeholderText="Select date..."
          isClearable={filter ? true : false}
          popperPlacement="top-end"
          className="published-datepicker"
          selected={filter ? filter.value : ''}
          onChange={date => onChange(date)}
        />
      );
    }
  }
];

export default columns;
