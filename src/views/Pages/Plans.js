import React from "react";
import ReactTableCustom from '../ReactTableCustom';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Plans extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Plans') }

  render() {
    const columns = [
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
        dataPath='plans'
      />
    );
  }
}

export default withHeaderTitle(Plans);
