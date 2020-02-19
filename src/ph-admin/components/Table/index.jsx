import React from 'react';
import ReactTable from 'react-table';

import './styles.scss';

const Table = props => {
  const { data, pages, loading, columns, onFetchData, manual = true } = props;

  return (
    <ReactTable
      {...props}
      data={data}
      manual={manual}
      pages={pages}
      resizable={true}
      filterable={true}
      loading={loading}
      className="-striped -highlight"
      columns={columns}
      onFetchData={onFetchData}
    />
  );
}

export default Table;

