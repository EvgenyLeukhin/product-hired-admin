import React, { Component } from 'react';

import Table from "../../components/Table";
import AddButton from '../../components/AddButton';

import formatNumber from './../../utils/formatNumber';
import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

class Campaings extends Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Campaings') }

  state = {
    // table
    count: 5, loading: false,

    // modals
    addModalLoading: false, deleteModalLoading: false,
  }

  addClick = () => alert('Add click!');
  deleteClick = () => alert('Delete click!');

  componentDidMount() {

  }


  render() {
    const {
      // table
      count, loading,

      // modals
      addModalLoading, deleteModalLoading,
    } = this.state;

    return (
      <div className="campaings-page">
        <div className="table-top">
          <p className="md-lg">
            Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
          </p>

          <AddButton
            text="company"
            loading={addModalLoading && deleteModalLoading}
            addClick={this.addClick}
          />
        </div>
      </div>
    );
  }
}

export default withHeaderTitle(Campaings);
