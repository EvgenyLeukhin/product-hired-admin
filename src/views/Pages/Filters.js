import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Filters extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Filters');
    }

    render() {
        return (
            <section className="section-container">
              Filters List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Filters);
