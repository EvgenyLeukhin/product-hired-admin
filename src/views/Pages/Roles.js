import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Roles extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Roles');
    }

    render() {
        return (
            <section className="section-container">
              Roles List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Roles);
