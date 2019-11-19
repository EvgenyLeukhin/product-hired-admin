import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Plans extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Plans');
    }

    render() {
        return (
            <section className="section-container">
              Plans List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Plans);
