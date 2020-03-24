import React from 'react';

import { Button } from 'reactstrap';
import Alerts from '../../components/Alerts/index2.jsx';
import Spinner from '../../../components/Spinner';

import getPlan  from './api/getPlan';
import editPlan from './api/editPlan';

class PlanDetail extends React.Component {
  state = {
    // fields
    id: null, name: '', price: null, oldName: '',

    // alerts
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // api
    loading: false,
  }

  // change fields
  onChange    = e  => this.setState({ [e.target.name]: e.target.value });

  // close page and go back to table
  closeDetail = () => this.props.history.goBack();

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  // edit request
  editSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { id, name, price } = this.state;
    editPlan(id, name, price).then(() => {
      // open alert
      this.setState({ alertIsOpen: true, alertType: 'edit'});

      // close alert after 2 sec and redirect to table
      setTimeout(() => {
        this.setState({ loading: false, alertIsOpen: false});
        this.closeDetail();
      }, 2000);

    }).catch(error => this.catchErrors(error));
  }

  catchErrors = error => {
    const { name, statusCode, message } = error.response.data.error;
    if (statusCode === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');

    } else {
      this.setState({
        errorAlertIsOpen: true,
        loading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true });

    // get request
    getPlan(match.params.id).then(res => {
      const { id, name, price } = res.data;
      this.setState({ id, name, price, oldName: name, loading: false });
    }).catch(error => this.catchErrors(error));
  }

  render() {
    const {
      name, price, oldName,                                     // fields
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen, // alerts
      loading                                                   // api
    } = this.state;


    return (
      <section className="ph-detail-page  container">
        {
          alertIsOpen && (
            <Alerts name={name} type={alertType} errorText={alertErrorText} errorAlertIsOpen={errorAlertIsOpen}closeErrorAlert={this.closeErrorAlert} />
          )
        }

        <h4 className="ph-detail-page__title">Edit: <b>{oldName}</b></h4>
        <span className="ion-close-round ph-detail-page__close" onClick={this.closeDetail} />

        {
          loading && <div className="ph-detail-page__is-loading"><Spinner /></div>
        }

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={this.editSubmit}>
              <fieldset>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="edit-name">Plan</label>

                    <input
                      required
                      name="name"
                      type="text"
                      value={name}
                      id="edit-name"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>


                  <div className="col-md-6">
                    <label htmlFor="edit-price">Price</label>

                    <input
                      required
                      min={0}
                      max={10000}
                      name="price"
                      type="number"
                      value={price}
                      id="edit-price"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </fieldset>


              <footer className="ph-detail-page__buttons">
                <Button outline color="secondary" onClick={this.closeDetail}>Cancel</Button>
                <Button disabled={!name || !price} outline color="primary" type="submit">Save</Button>
              </footer>

            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default PlanDetail;
