import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Skills extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Skills');
    }

    render() {
        return (
            <section className="section-container">
              Skills List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Skills);
