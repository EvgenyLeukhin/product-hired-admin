import React from 'react';
import ReactTable from 'react-table';

import './styles.scss';

const Table = props => (
  <ReactTable
    {...props}
    resizable={true}
    filterable={true}
    className="-striped -highlight"
  />
);

export default Table;

