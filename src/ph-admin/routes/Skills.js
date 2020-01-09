import React from "react";

import Table from '../../ph-admin/table';
import customFiltering from '../table/customFiltering';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  render() {
    const columns = [
      {
        Header: 'Skill',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Aliases',
        accessor: 'markers',
        Cell: ({ original }) => <div>{original.markers || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Slug',
        accessor: 'slug',
        Cell: ({ original }) => <div>{original.slug || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },
    ];

    return <Table columns={columns} dataPath='skills' />;
  }
}

export default withHeaderTitle(Skills);
