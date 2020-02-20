import React from "react";

import Table from '../../table';
import customFiltering from '../../table/customFiltering';
import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

class Plans extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Plans') }

  render() {
    const columns = [
      {
        Header: 'Plan',
        accessor: 'plan',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => <div>{original.name || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Price',
        accessor: 'price',
        Cell: ({ original }) => <div>{`$${original.price}`}</div> || '...',
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },
    ];

    return (
      <Table columns={columns} dataPath='plans' buttonText="plan" />
    );
  }
}

export default withHeaderTitle(Plans);
