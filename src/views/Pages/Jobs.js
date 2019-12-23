import React from "react";
import ReactTableCustom from '../ReactTableCustom';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Jobs extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Jobs') }

  render() {
    const columns = [
      { Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div> },

      { Header: 'Job',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div> },

      { Header: 'Location',
        accessor: 'locations',
        width: 200,
        sortable: false,
        filterable: false,
        Cell: ({ original }) => <span>{original.locations.map(i => `${i.name} `)}</span> },

      { Header: 'Created',
        accessor: 'created',
        width: 120,
        Cell: ({ original }) => (
          <div style={{ textAlign: 'center' }}>
            <span>{original.created.substring(0, 10) || '...'}</span>
          </div>
        )},
    ];

    return (
      <ReactTableCustom
        order='id DESC'
        columns={columns}
        dataPath='api/api/vacancies'
        countPath='api/api/vacancies/count'
      />
    );
  }
}

export default withHeaderTitle(Jobs);
