import React from "react";
import ReactTableCustom from '../ReactTableCustom';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Roles extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Roles') }

  render() {
    const columns = [
      { Header: 'Role',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div> },
    ];

    return (
      <ReactTableCustom
        columns={columns}
        dataPath='user_roles'
      />
    );
  }
}

export default withHeaderTitle(Roles);
