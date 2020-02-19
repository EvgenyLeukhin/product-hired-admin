import React from "react";

import Table from '../../components/Table';
import EditModal from './edit';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getPlans from './api/getPlans';
import columns from './columns';

import editRequest from './api/editRequest';


class Plans extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Plans') }

  state = {
    // table
    plans: [], // array of objects
    loading: false,

    // edit
    editModal: false,
    original: {},
    id: null, // number
    name: '', // string
    price: null, // number
  }

  // get values from original react-table (original.id, original.name, original.price)
  editClick = original => () => {
    this.setState({
      editModal: true,
      original,
      id: original.id,
      name: original.name,
      price: original.price,
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  editSubmit = e => {
    e.preventDefault();

    // get edit values
    const { id, name, price } = this.state;
    editRequest(id, name, price)

      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { plans } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < plans.length; i++) {
          if (plans[i].id === id) {
            // inject editing data to table state
            plans[i] = { id, name, price };
          }
        }
        this.setState({
          plans, // new plans with edited item
          editModal: false,
        });
      })
  }


  componentDidMount() {
    this.setState({ loading: true });

    // getPlans request
    getPlans().then(res => {
      this.setState({ plans: res.data, loading: false });
    })
  }


  render() {
    const { plans, loading, editModal, name, price, original } = this.state;

    const controlsColumn = [
      {
        Header: '',
        width: 65,
        sortable: false,
        filterable: false,
        Cell: ({ original }) => (
          <div className="rt-custom__controls">
            <i className="ion-edit" onClick={this.editClick(original)} />
          </div>
        )
      }
    ];

    return (
      <div className="plans-page">
        <EditModal
          name={name}
          price={price}
          original={original}
          isOpen={editModal}
          closeModal={() => this.setState({ editModal: false })}
          onChange={this.onChange}
          onSubmit={this.editSubmit}
        />

        <Table
          manual={false}
          data={plans}
          columns={columns}
          columns={[...columns, ...controlsColumn]}
          loading={loading}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Plans);
