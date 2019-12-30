import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';

class Talents extends Component {
    componentWillMount() {
        this.props.setHeaderTitle('Talents');
    }

    render() {
        return (
            <section className="section-container">
              Talents List - TODO
            </section>
        );
    }
}

export default withHeaderTitle(Talents);
