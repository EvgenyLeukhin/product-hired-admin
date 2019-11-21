import React, { Component } from "react";
import ReactTable from 'react-table';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Companies extends Component {
    state = {
      loading: false,
      companies: []
    }

    componentWillMount() {
        this.props.setHeaderTitle('Companies');
    }

    componentDidMount() {
      const userToken = localStorage.getItem('ph-admin-token');

      axios.get(`${API_URL}/api/api/companies`, {
          headers: { Authorization: userToken }
      })
          .then(this.setState({ loading: true }))

          .then(res => {
              this.setState({ 
                companies: res.data,
                loading: false,
                // companies: res.data.slice(0, 100), // only 100
              });
          })
    }

    render() {

      const columns = [
        { 
          Header: 'ID',
          accessor: 'id',
          width: 60,
          Cell: ({ original }) => {
            return (
              <div style={{ textAlign: 'right' }}>
                <span>{original.id}</span>
              </div>
            );
          }
        }, 
        { 
          Header: 'Name', 
          accessor: 'name',
          Cell: ({ original }) => {
            return (
              <div>
                <img src={original.logo} width={20} height="auto" />
                &nbsp;&nbsp;
                <span>{original.name}</span>
              </div>
            );
          }
        },
        { 
          Header: 'Domain', 
          accessor: 'domain',
          Cell: ({ original }) => {
            return (
              <a href={`http://${original.domain}`} target="_blank" rel="noopener noreferrer">{original.domain}</a>
            );
          }
        },
      ];

      const { companies, loading } = this.state;

        return (
            <section className="section-container">
              <ReactTable 
                data={companies} 
                columns={columns} 
                filterable={true}
                resizable={true}
              />
            </section>
        );
    }
}

export default withHeaderTitle(Companies);