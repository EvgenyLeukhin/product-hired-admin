import React from 'react';
import slugify from 'slugify';

import { Button } from 'reactstrap';
import Alerts from '../../components/Alerts/index2.jsx';
import Spinner from '../../../components/Spinner';

import DeleteSkill from './delete';

import getSkill    from './api/getSkill';
import editSkill   from './api/editSkill';
import deleteSkill from './api/deleteSkill';

class SkillDetail extends React.Component {
  state = {
    // fields
    id: null, name: '', slug: '', weight: null, markers: '',

    // alerts
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // api
    loading: false,

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false
  }

  // change fields
  onChange    = e  => this.setState({ [e.target.name]: e.target.value });

  generateSlug = () => {
    const { name } = this.state;
    this.setState({
      slug: slugify(name, { replacement: '-', lower: true })
    });
  }

  // close page and go back to table
  closeDetail = () => this.props.history.push('/skills');

  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  // edit request
  editSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { id, name, slug, markers, weight } = this.state;
    editSkill(id, name, slug, markers, weight).then(res => {
      // open alert
      this.setState({ alertIsOpen: true, alertType: 'edit'});

      // close alert after 2 sec and redirect to table
      setTimeout(() => {
        this.setState({ loading: false, alertIsOpen: false});

        // push data to router
        const { history } = this.props;
        history.push({
          pathname: '/skills',
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

    deleteSkill(id)
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
            pathname: '/skills',
            state: { deletedId: id }
          });

          this.setState({ alertIsOpen: false });
        }, 2000);
      })
      .catch(error => this.catchErrors(error));
  }

  generateSlug = () => {
    const { name } = this.state;
    this.setState({
      slug: slugify(name, { replacement: '-', lower: true })
    });
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
    getSkill(match.params.id).then(res => {
      const { id, name, slug, markers, weight } = res.data;
      this.setState({ id, name, oldName: name, slug, markers, weight, loading: false });
    }).catch(error => this.catchErrors(error));
  }

  render() {
    const {
      id, name, oldName, slug, weight, markers,                 // fields
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen, // alerts
      loading,                                                  // api
      deleteModalIsOpen, deleteModalLoading,                    // delete
    } = this.state;


    return (
      <section className="ph-detail-page  container">
        <DeleteSkill
          id={id} name={name}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />
        {
          alertIsOpen && (
            <Alerts id={id} name={name} type={alertType} errorText={alertErrorText} errorAlertIsOpen={errorAlertIsOpen}closeErrorAlert={this.closeErrorAlert} />
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
                  <div className="col-md-5">
                    <label htmlFor="edit-name">Skill</label>

                    <input
                      name="name"
                      type="text"
                      value={name}
                      id="edit-name"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="edit-slug">Slug</label>

                    <div className="input-group">
                      <input
                        required
                        name="slug"
                        type="text"
                        value={slug}
                        id="edit-slug"
                        onChange={this.onChange}
                        className="form-control"
                      />

                      <div className="input-group-append">
                        <button
                          className="btn btn-light"
                          type="button"
                          onClick={this.generateSlug}
                          disabled={!name}
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="edit-weight">Weight</label>

                    <input
                      min={0}
                      max={999}
                      name="weight"
                      type="number"
                      value={weight}
                      id="edit-weight"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="edit-aliases">Aliases</label>

                    <textarea
                      rows={3}
                      type="text"
                      name="markers"
                      value={markers}
                      id="edit-aliases"
                      onChange={this.onChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </fieldset>

              <footer className="ph-detail-page__buttons">
                <Button outline color="danger" onClick={this.deleteClick}>Delete</Button>
                <Button outline color="secondary" onClick={this.closeDetail}>Cancel</Button>
                <Button disabled={!name || !slug} outline color="primary" type="submit">Save</Button>
              </footer>

            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillDetail;
