import React from "react";

import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import ReactTableCustom from '../ReactTableCustom';

import noLogo from './../../img/no-logo.jpg';

class Companies extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Companies') }

  render() {
    const columns = [
      { Header: 'Company name',
        accessor: 'name',
        style: { fontWeight: 'bold' },
        Cell: ({ original }) => (
          <div>
            <img src={original.logo || noLogo} width={20} height={20} />
            &nbsp;&nbsp;
            <span>{original.name || '...'}</span>
          </div>
        )},

      { Header: 'Domain',
        accessor: 'domain',
        Cell: ({ original }) => {
          if (original.domain) {
            return (
              <a href={`http://${original.domain}`} target="_blank" rel="noopener noreferrer">{original.domain}</a>
            );
          } else return '...';
        }},

      { Header: 'Slug',
        accessor: 'slug',
        Cell: ({ original }) => <div>{original.slug || '...'}</div> }
    ];

    return (
      <ReactTableCustom
        columns={columns}
        order='id DESC'
        dataPath='companies'
      />
    );
  }
}

export default withHeaderTitle(Companies);
