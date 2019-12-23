import React from "react";
import ReactTableCustom from '../ReactTableCustom';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Users extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Users') }

  render() {
    const columns = [
      { Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div> },

      { Header: 'Name',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => (
          <div>
            <span>{`${original.name} ${original.surname}` || '...'}</span>
          </div>
        )},

      { Header: 'Email',
        accessor: 'email',
        Cell: ({ original }) => <a href={`mailto:${original.email}`}>{original.email || '—'}</a> },

      { Header: 'Created',
        accessor: 'created',
        width: 120,
        Cell: ({ original }) => (
          <div style={{ textAlign: 'center' }} >
            <span>{original.created.substring(0, 10) || '...'}</span>
          </div>
        )},
    ];

    return (
      <ReactTableCustom
        columns={columns}
        dataPath='api/api/users'
        countPath='api/api/users/count'
      />
    );
  }
}

export default withHeaderTitle(Users);
