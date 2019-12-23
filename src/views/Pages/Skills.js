import React from "react";
import ReactTableCustom from '../ReactTableCustom';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  render() {
    const columns = [
      { Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div> },

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

    return (
      <ReactTableCustom
        columns={columns}
        dataPath='api/api/skills'
        countPath='api/api/skills/count'
      />
    );
  }
}

export default withHeaderTitle(Skills);
