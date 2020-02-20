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
    Header: 'Role',
    accessor: 'name',
    style: { fontWeight: 'bold' },
    Cell: ({ original }) => <div>{original.name || '...'}</div>,
    filterMethod: (filter, row) => {
      const id = filter.pivotId || filter.id;
      return (
        row[id] !== undefined ?
          String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
      );
    }
  },
  {
    Header: 'Slug',
    accessor: 'slug',
    Cell: ({ original }) => <div>{original.slug || '...'}</div>,
    filterMethod: (filter, row) => {
      const id = filter.pivotId || filter.id;
      return (
        row[id] !== undefined ?
          String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
      );
    }
  },
  {
    Header: 'Weight',
    accessor: 'weight',
    width: 60,
    Cell: ({ original }) => <div>{original.weight || '...'}</div>,
  },
];

export default columns;
