import React from 'react';

import { Button } from 'reactstrap';
import Alerts from '../../components/Alerts';
import Spinner from '../../../components/Spinner';

import DeletePage from './delete';

import getPage    from './api/getPage';
import editPage   from './api/editPage';
import deletePage from './api/deletePage';

import { API_URL, subUrl } from '../../api/apiUrl';

class PageDetail extends React.Component {
  state = {
    // fields
    id: null, name: '', domain: '', step: null,

    // alerts
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // api
    loading: false,

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false
  }

  // change fields
  onChange = e  => this.setState({ [e.target.name]: e.target.value });

  // close page and go back to table
  closeDetail = () => this.props.history.push('/pages-for-advertising');

  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  // edit request
  editSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { id, name, domain, step } = this.state;
    editPage(id, name, domain, step).then(res => {
      // open alert
      this.setState({ alertIsOpen: true, alertType: 'edit'});

      // close alert after 2 sec and redirect to table
      setTimeout(() => {
        this.setState({ loading: false, alertIsOpen: false});

        // push data to router
        const { history } = this.props;
        history.push({
          pathname: '/pages-for-advertising',
          state: { afterEditData: res.data }
        })
      }, 2000);

    }).catch(error => this.catchErrors(error));
  }

  deleteClick = () => {
    this.setState({ deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const { id } = this.state;

    this.setState({
      loading: true,
      deleteModalIsOpen: false, // it may be lower in logic (now it is not needs if false)
      deleteModalLoading: true,
      errorAlertIsOpen: false
    });

    deletePage(id)
      .then(() => {
        this.setState({
          deleteModalIsOpen: false,
          deleteModalLoading: false,
          alertType: 'delete', alertIsOpen: true
        });

        setTimeout(() => {
          // push data to router
          const { history } = this.props;
          history.push({
            pathname: '/pages-for-advertising',
            state: { deletedId: id }
          });

          this.setState({ alertIsOpen: false });
        }, 2000);
      })
      .catch(error => this.catchErrors(error));
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
    getPage(match.params.id).then(res => {
      const { id, name, domain, step } = res.data;
      this.setState({ id, name, oldName: name, domain, step, loading: false });
    }).catch(error => this.catchErrors(error));
  }

  render() {
    const {
      id, name, oldName, domain, step,                               // fields
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen,     // alerts
      loading,                                                      // api
      deleteModalIsOpen, deleteModalLoading,                        // delete
    } = this.state;


    return (
      <section className="ph-detail-page  container">
        <DeletePage
          id={id} name={name}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />

        {
          alertIsOpen && (
            <Alerts
              id={id}
              name={name}
              type={alertType}
              errorText={alertErrorText}
              errorAlertIsOpen={errorAlertIsOpen}
              closeErrorAlert={this.closeErrorAlert}
            />
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
                  <div className="col-md-8">
                    <label htmlFor="edit-name">Page title</label>

                    <input
                      name="name"
                      value={name}
                      id="edit-name"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="edit-step">Incremental step</label>

                    <input
                      name="step"
                      value={step}
                      id="edit-step"
                      onChange={this.onChange}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="edit-domain">Page URL/Template</label>

                    <input
                      name="domain"
                      value={domain}
                      id="edit-domain"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </fieldset>



              <footer className="ph-detail-page__buttons">
                <Button outline color="danger" onClick={this.deleteClick}>Delete</Button>
                <Button outline color="secondary" onClick={this.closeDetail}>Cancel</Button>
                <Button disabled={!name} outline color="primary" type="submit">Save</Button>
              </footer>

            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default PageDetail;
