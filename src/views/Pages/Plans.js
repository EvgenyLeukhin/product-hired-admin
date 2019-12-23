import React from "react";
import ReactTableCustom from '../ReactTableCustom';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Plans extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Plans') }

  render() {
    const columns = [
      { Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div> },

      { Header: 'Plan',
        accessor: 'plan',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div> },

      { Header: 'Price',
        accessor: 'price',
        Cell: ({ original }) => <div>{`$${original.price}`}</div> || '...' },
    ];

    return (
      <ReactTableCustom
        columns={columns}
        dataPath='api/api/plans'
        countPath='api/api/plans/count'
      />
    );
  }
}

export default withHeaderTitle(Plans);
