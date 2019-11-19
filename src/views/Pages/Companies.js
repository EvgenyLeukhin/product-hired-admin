import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Companies extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Companies');
    }

    render() {
        return (
            <section className="section-container">
              Companies List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Companies);
