import React, { Component } from "react";
import ReactTable from 'react-table';
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import axios from 'axios';

import API_URL from '../../consts/apiUrl';


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
                console.log(res);
                this.setState({ 
                    companies: res.data,
                    loading: false,
                });
            })
    }

    render() {
        const { companies } = this.state;
        const columns = [
            { Header: 'Col 1' }, 
            { Header: 'Col 2' }, 
            { Header: 'Col 3' }, 
        ];

        const data = [
            { Header: 'Col 1' }, 
            { Header: 'Col 2' }, 
            { Header: 'Col 3' }, 
        ];

        return (
            <section className="section-container">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Company</th>
                            <th>ID</th>
                            <th>Domain</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        companies.map((i, index) => {
                            return (
                                <tr key={i.id}>
                                    <td>{index}</td>
                                    <td>{i.name}</td>
                                    <td>{i.id}</td>
                                    <td>{i.domain}</td>
                                    {/* <img src={i.logo} /> */}
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </section>
        );
    }
}

export default withHeaderTitle(Companies);
