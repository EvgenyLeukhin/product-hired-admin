import React from 'react';

import Table from '../../ph-admin/table';
import customFiltering from '../table/customFiltering';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Roles extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Roles') }

  render() {
    const columns = [
      {
        Header: 'Role',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },
    ];

    return (
      <Table
        startOrder='id DESC'
        columns={columns}
        dataPath='user_roles'
        wrapperClassname='users-table'
      />
    );
  }
}

export default withHeaderTitle(Roles);
