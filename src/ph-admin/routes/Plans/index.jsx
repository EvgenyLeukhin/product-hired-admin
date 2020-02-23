import React from "react";

import Table from '../../components/Table';
import Alerts from '../../components/Alerts';
import EditPlan from './edit';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getPlans from './api/getPlans';
import editPlan from './api/editPlan';

import columns from './columns';


class Plans extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Plans') }

  state = {
    // table
    plans: [], // array of objects
    tableLoading: false,

    // alert
    alertIsOpen: false,
    alertType: '',
    alertErrorText: '',

    // edit
    editModalIsOpen: false,
    modalLoading: false,
    original: {},

    // fields
    id: null,
    name: '',
    price: null,
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');

    } else {
      this.setState({
        modalLoading: false,
        addModalIsOpen: false, editModalIsOpen: false, deleteModalIsOpen: false, // close modals
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${error}`
      });
    }
  }

  // get values from original react-table (original.id, original.name, original.price)
  editClick = original => () => {
    this.setState({
      editModalIsOpen: true,
      original,
      id: original.id,
      name: original.name,
      price: original.price,
      alertIsOpen: false
    });
  }

  closeModal = () => !this.state.modalLoading && this.setState({ editModalIsOpen: false });

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });

    // get edit values
    const { id, name, price } = this.state;
    editPlan(id, name, price)

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
          modalLoading: false,
          editModalIsOpen: false,
          alertType: 'edit',
          alertIsOpen: true
        });

        // close alert after 2 sec
        setTimeout(() => {
          this.setState({ alertIsOpen: false });
        }, 2000);
      })

      .catch(error => this.catchErrors(error));
  }


  componentDidMount() {
    this.setState({ tableLoading: true });

    // getPlans request
    getPlans()
      .then(res => this.setState({ plans: res.data, tableLoading: false }))
      .catch(error => this.catchErrors(error));

    // close modal on Escape
    document.addEventListener('keyup', e => e.keyCode === 27 && this.closeModal());
  }
  componentWillUnmount() { document.removeEventListener('keyup', e => e.keyCode === 27) }


  render() {
    const {
      // table
      tableLoading, original,

      // fields
      name, price, plans,

      // modals
      editModalIsOpen, modalLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText
    } = this.state;

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
        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

        <EditPlan
          // fields
          name={name}
          price={price}
          original={original}

          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeModal}
          onChange={this.onChange}
          onSubmit={this.editSubmit}
        />

        <Table
          data={plans}
          manual={false}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Plans);
