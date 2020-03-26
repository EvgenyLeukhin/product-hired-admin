import React from 'react';
import slugify from 'slugify';

import { Button } from 'reactstrap';
import Alerts from '../../components/Alerts/index2.jsx';
import Spinner from '../../../components/Spinner';

import DeleteCompany from './delete';

import getCompany    from './api/getCompany';
import editCompany   from './api/editCompany';
import deleteCompany from './api/deleteCompany';
import uploadLogo    from './api/uploadLogo';
import uploadCover   from './api/uploadCover';

import { API_URL, subUrl } from '../../api/apiUrl';

class CompanyDetail extends React.Component {
  fileInputLogo  = React.createRef();
  fileInputCover = React.createRef();

  state = {
    // fields
    id: null, name: '', domain: '', slug: '', logo: '', cover: '',

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
  closeDetail = () => this.props.history.push('/companies');

  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  onUploadLogo = e => {
    e.preventDefault();
    this.setState({ logoLoading: true });

    // create a new form data
    const formData = new FormData();

    // get image from the browser memory
    const uploadLogoFile = this.fileInputLogo.current.files[0];

    // append this file to form data
    formData.append('file', uploadLogoFile);

    // uploadLogoRequest
    uploadLogo(formData)
      .then(res => {
        this.setState({
          logo: `${API_URL}/${subUrl}/containers/logo/download/${res.data.name}`,
          logoLoading: false
        })
      })
      .catch(error => this.catchErrors(error));
  }

  onUploadCover = e => {
    e.preventDefault();
    this.setState({ coverLoading: true });
    const formData = new FormData();
    const uploadCoverFile = this.fileInputCover.current.files[0];
    formData.append('file', uploadCoverFile);

    uploadCover(formData)
      .then(res => {
        this.setState({
          cover: `${API_URL}/${subUrl}/containers/cover/download/${res.data.name}`,
          coverLoading: false
        })
      })
      .catch(error => this.catchErrors(error));
  }

  deleteLogo  = () => this.setState({ logo: '' });

  deleteCover = () => this.setState({ cover: '' });

  // edit request
  editSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { id, name, domain, slug, logo, cover } = this.state;
    editCompany(id, name, domain, slug, logo, cover).then(res => {
      // open alert
      this.setState({ alertIsOpen: true, alertType: 'edit'});

      // close alert after 2 sec and redirect to table
      setTimeout(() => {
        this.setState({ loading: false, alertIsOpen: false});

        // push data to router
        const { history } = this.props;
        history.push({
          pathname: '/companies',
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

    deleteCompany(id)
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
            pathname: '/companies',
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
    getCompany(match.params.id).then(res => {
      const { id, name, domain, slug, logo, cover } = res.data;
      this.setState({ id, name, oldName: name, domain, slug, logo, cover, loading: false });
    }).catch(error => this.catchErrors(error));
  }

  render() {
    const {
      id, name, oldName, domain, slug, logo, cover,                 // fields
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen,     // alerts
      loading,                                                      // api
      deleteModalIsOpen, deleteModalLoading,                        // delete

      logoLoading, coverLoading,

    } = this.state;


    return (
      <section className="ph-detail-page  container">
        <DeleteCompany
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
                  <div className="col-md-4">
                    <label htmlFor="edit-name">Company name</label>

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
                    <label htmlFor="edit-domain">Website</label>

                    <input
                      name="domain"
                      value={domain}
                      id="edit-domain"
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="edit-slug">Slug</label>

                    <div className="input-group">
                      <input
                        name="slug"
                        value={slug}
                        id="edit-slug"
                        onChange={this.onChange}
                        type="text"
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



                  <div className="col-md-6">
                    <div className="edit-logo">
                      <label htmlFor="edit-logo">Logo</label>
                      {
                        logoLoading ? <Spinner /> : (
                          logo ? <img className="logo" src={logo} alt="logo" /> : <div className="no-logo">No logo</div>
                        )
                      }
                      <input
                        id="edit-logo"
                        type="file"
                        className="input-file-custom"
                        ref={this.fileInputLogo}
                        onChange={this.onUploadLogo}
                      />
                      <label htmlFor="edit-logo" className="input-file-label  btn btn-light">
                        <i className="ion-image" />&nbsp;
                        <span>Load logo</span>
                      </label>
                    </div>

                    <div className="edit-logo-url">
                      <label htmlFor="edit-logo-url">Logo URL</label>

                      <div className="input-group">
                        <input
                          name="logo"
                          value={logo && logo.includes('clearbit.com') ? '' : logo}
                          id="edit-logo-url"
                          onChange={this.onChange}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste logo URL or load file"
                        />

                        <div className="input-group-append">
                          <button className="btn btn-light" type="button" onClick={this.deleteLogo} disabled={!logo}>
                            Clear
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="edit-cover">
                      <label htmlFor="edit-cover">Cover</label>
                      {
                        coverLoading ? <Spinner /> : (
                          cover ? <img className="cover" src={cover} alt="cover" /> : <div className="no-cover">No cover</div>
                        )
                      }
                      <input
                        id="edit-cover"
                        type="file"
                        className="input-file-custom"
                        ref={this.fileInputCover}
                        onChange={this.onUploadCover}
                      />
                      <label htmlFor="edit-cover" className="input-file-label  btn btn-light">
                        <i className="ion-image" />&nbsp;
                        <span>Load cover</span>
                      </label>
                    </div>

                    <div className="edit-cover-url">
                      <label htmlFor="edit-cover-url">Cover URL</label>

                      <div className="input-group">
                        <input
                          name="cover"
                          value={cover}
                          id="edit-cover-url"
                          onChange={this.onChange}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste cover URL or load file"
                        />

                        <div className="input-group-append">
                          <button className="btn btn-light" type="button" onClick={this.deleteCover} disabled={!cover}>
                            Clear
                          </button>
                        </div>
                      </div>

                    </div>
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

export default CompanyDetail;
