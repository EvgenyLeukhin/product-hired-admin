import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Jobs extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Jobs');
    }

    render() {
        return (
            <section className="section-container">
              Jobs List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Jobs);
