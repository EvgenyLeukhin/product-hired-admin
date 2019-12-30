import React from "react";
import Table from '../../ph-admin/table';

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

    return <Table columns={columns} dataPath='plans' wrapperClassname='plans-table' />;
  }
}

export default withHeaderTitle(Plans);
