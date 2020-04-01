import React from 'react';
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import isEmpty from 'lodash/isEmpty';

import { Input } from 'debounce-input-decorator';

import 'react-datepicker/dist/react-datepicker.css';


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
    Header: 'Full name',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => {
      const { id } = original;
      const name    = original.name || '';
      const surname = original.surname || '';
      return (
        <div className="table-column-name  ellipsis-text" title={`${name} ${surname}`}>
          <NavLink to={`/users/${id}`}>
            {`${name} ${surname}`}
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

  // email //
  {
    Header: 'Email',
    accessor: 'email',
    Cell: ({ original }) => {
      const { email } = original;
      if (email) {
        return (
          <div className="ellipsis-text">
            <a href={`mailto:${original.email}`} title={email} onClick={e => e.stopPropagation()}>
              {email}
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

  // role //
  {
    Header: 'Role',
    accessor: 'user_role_id',
    width: 100,
    Cell: ({ original }) => {
      const { user_role_id } = original;
      const userRole = user_role_id ? (
        user_role_id === 1 && 'Talent' ||
        user_role_id === 2 && 'Both'   ||
        user_role_id === 3 && 'Recruiter'
      ) : 'Null';

      return (
        <div className="ellipsis-text" title={userRole}>
          {userRole}
        </div>
      );
    },
    Filter: ({ filter, onChange }) => {
      return (
        <select
          onChange={
            event => {
              if (event.target.value === 'Null') {
                return onChange(null);
              } else return onChange(event.target.value);
            }
          }
          style={{ width: "100%", height: '38px' }}
          value={filter ? filter.value : ''}
        >
          <option value=''>All</option>
          <option value={null}>Null</option>
          <option value={1}>Talent</option>
          <option value={2}>Both</option>
          <option value={3}>Recruiter</option>
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
      )
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
  // lastLogin //
  {
    Header: 'Last login',
    accessor: 'lastLogin',
    Cell: ({ original }) => {
      const { lastLogin } = original;
      return (
        <div className="ellipsis-text" title={lastLogin && lastLogin.substring(0, 10) || ''}>
          <span>{lastLogin && lastLogin.substring(0, 10) || ''}</span>
        </div>
      )
    },
    Filter: ({ filter, onChange }) => {
      return (
        <DatePicker
          placeholderText="Select date..."
          isClearable={filter ? true : false}
          className="lastLogin-datepicker"
          selected={filter ? filter.value : ''}
          onChange={date => {
            console.log(date);
            onChange(date)
          }}
        />
      );
    }
  },

  // access //
  {
    Header: 'Access',
    accessor: 'roles',
    width: 110,
    filterable: false,
    sortable: false,
    Cell: ({ original }) => {
      const { roles } = original;
      const rolesArray = roles ? roles.map(i => i.name) : [];

      if (!isEmpty(rolesArray)) {
        return <span className="roles-string">{rolesArray.join(', ')}</span>;
      } else return null;
    }
  },

  // status //
  // {
  //   Header: 'Status',
  //   accessor: 'status',
  //   width: 100,
  //   Cell: ({ original }) => {
  //     const { status } = original;
  //     return (
  //       <div
  //         className="text-ellipsis"
  //         style={{ color: status ? 'rgb(0,203,131)' : '#dc3545' }}
  //         title={status ? 'Active' : 'Blocked'}
  //       >
  //         {status ? 'Active' : 'Blocked'}
  //       </div>
  //     )
  //   },
  //   Filter: ({ filter, onChange }) => {
  //     return (
  //       <select
  //         onChange={event => onChange(event.target.value)}
  //         style={{ width: "100%", height: '38px' }}
  //         value={filter ? filter.value : ''}
  //       >
  //         <option value=''>All</option>
  //         <option value={true}>Active</option>
  //         <option value={false}>Blocked</option>
  //       </select>
  //     )
  //   }
  // },
];

export default columns;
