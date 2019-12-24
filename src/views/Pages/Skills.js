import React from "react";
import ReactTableCustom from '../ReactTableCustom';

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

    return (
      <ReactTableCustom
        columns={columns}
        dataPath='skills'
      />
    );
  }
}

export default withHeaderTitle(Skills);
