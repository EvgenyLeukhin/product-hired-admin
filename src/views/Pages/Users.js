import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Users extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Users');
    }

    render() {
        return (
            <section className="section-container">
              Users List - TO
            </section>
        );
    }
}

export default withHeaderTitle(Users);
