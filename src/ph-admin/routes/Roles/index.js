import React from 'react';

import Table from '../../table';
import customFiltering from '../../table/customFiltering';
import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

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
      {
        Header: 'Slug',
        accessor: 'slug',
        Cell: ({ original }) => <div>{original.slug || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },
      {
        Header: 'Weight',
        accessor: 'weight',
        width: 60,
        Cell: ({ original }) => <div>{original.weight || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },
    ];

    return (
      <Table
        columns={columns}
        buttonText='role'
        dataPath='vacancy_roles'
      />
    );
  }
}

export default withHeaderTitle(Roles);
