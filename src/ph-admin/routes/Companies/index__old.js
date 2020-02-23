import React from "react";

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';
import Table from '../../table';

import customFiltering from '../../table/customFiltering';

import noLogo from './no-logo.jpg';

class Companies extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Companies') }

  render() {
    const columns = [
      {
        Header: 'Company name',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => (
          <div>
            <img src={original.logo || noLogo} width={20} height={20} />
            &nbsp;&nbsp;
            <span>{original.name || '...'}</span>
          </div>
        ),
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Domain',
        accessor: 'domain',
        Cell: ({ original }) => {
          if (original.domain) {
            return (
              <a href={`http://${original.domain}`} target="_blank" rel="noopener noreferrer">{original.domain}</a>
            );
          } else return '...';
        },
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Slug',
        accessor: 'slug',
        Cell: ({ original }) => <div>{original.slug || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      },

      {
        Header: 'Weight',
        accessor: 'weight',
        width: 60,
        Cell: ({ original }) => <div>{original.weight || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      }
    ];

    return (
      <Table
        columns={columns}
        startOrder='id DESC'
        dataPath='companies'
        buttonText="company"
      />
    );
  }
}

export default withHeaderTitle(Companies);
