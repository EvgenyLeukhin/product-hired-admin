import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Employers extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Employers');
    }

    render() {
        return (
            <section className="section-container">
              Employers List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Employers);
