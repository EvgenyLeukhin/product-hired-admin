import React from "react";
import Table from '../../ph-admin/table';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  render() {
    const columns = [
      { Header: 'Skill',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div> },

      { Header: 'Aliases',
        accessor: 'markers',
        Cell: ({ original }) => <div>{original.markers || '...'}</div> },

      { Header: 'Slug',
        accessor: 'slug',
        Cell: ({ original }) => <div>{original.slug || '...'}</div> },
    ];

    return <Table columns={columns} dataPath='skills' wrapperClassname='skills-table' />;
  }
}

export default withHeaderTitle(Skills);
