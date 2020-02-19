import React from "react";

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    width: 60,
    style: { textAlign: 'right' },
    Cell: ({ original }) => <div>{original.id || '...'}</div>
  },
  {
    Header: 'Plan',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => <div>{original.name || '...'}</div>,

    // uppercase filtering
    filterMethod: (filter, row) => {
      const id = filter.pivotId || filter.id;
      return (
        row[id] !== undefined ?
          String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
      );
    }
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: ({ original }) => <div>{`$${original.price}`}</div> || '...',
  },
];

export default columns;
