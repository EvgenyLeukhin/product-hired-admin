import React from "react";
import ReactTableCustom from '../ReactTableCustom';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Roles extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Roles') }

  render() {
    const columns = [
      { Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div> },

      { Header: 'Role',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div> },
    ];

    return (
      <ReactTableCustom
        columns={columns}
        dataPath='api/api/user_roles'
        countPath='api/api/user_roles/count'
      />
    );
  }
}

export default withHeaderTitle(Roles);
