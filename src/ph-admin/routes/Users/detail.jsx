import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import isEmpty from 'lodash/isEmpty';

import DeleteUser from './delete';
import UserApplied from './applied';

import { Button } from 'reactstrap';
import Alerts from '../../components/Alerts/index2.jsx';
import Spinner from '../../../components/Spinner';

import { API_URL } from '../../api/apiUrl';

import getUser             from './api/getUser';
import editUser            from './api/editUser';
import deleteUser          from './api/deleteUser';
import getSkills           from './api/getSkills';
import getLocation         from './api/getLocation';
import getLocations        from './api/getLocations';
import getRole             from './api/getRole';
import getRoles            from './api/getRoles';
import getUserRoles        from './api/getUserRoles';
import getCompany          from './api/getCompany';
import getCompanies        from './api/getCompanies';
import uploadImage         from './api/uploadImage';
import seniorityOptions    from './api/seniorityOptions';
import experienceOptions   from './api/experienceOptions';
import getUserApplied    from './api/getUserApplied';

import './edit.scss';

class UserDetail extends React.Component {
  fileInputImage  = React.createRef();

  state = {
    // fields
    id: null, name: '', oldName: '', surname: '', password: '', email: '', job_title: '',
    emailVerified: false, admin: false, status: true, banned: false,
    experience: { value: 0, label: '0' }, skills: [],
    created: '', modified: '',
    emailSettings: true, emailJobApplication: true, emailMarketing: true,
    seniority: {}, seniority_id: null,
    location: { id: null, name: '', alias_region: '' }, location_id: null,
    userRole: { id: null, name: '' }, user_role_id: null,
    roles: [], role: { id: null, name: '' }, role_id: null,
    company: { id: null, name: '' }, company_id: null,
    image: { url: '', icon: '', color: '' }, imageLoading: false,


    // alerts
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // api
    loading: false, tabIndex: 0, appliedCount: 0,

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false
  }

  // change fields
  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  onChangeImage = e => {
    this.setState({
      image: { url: `${e.target.value}`}
    });
  }

  onChangeSkills     = skills     => this.setState({ skills });
  onChangeExperience = experience => this.setState({ experience });

  onChangeSeniority = seniority => {
    this.setState({
      seniority,                     // 2. change react-select object
      seniority_id: seniority.value, // change seniority_id
    });
  }

  onChangeLocation = location => {
    this.setState({ location, location_id: location.id });
  }

  onChangeUserRole = userRole => {
    this.setState({ userRole, user_role_id: userRole.id });
  }

  onChangeRole = role => {
    this.setState({ role, role_id: role.id });
  }

  onChangeCompany = company => {
    this.setState({ company, company_id: company.id });
  }

  onChangeRoles = e => {
    const { name } = e.target;
    const { admin, banned } = this.state;
    // console.log(e.target.name, e.target.checked);

    if (name === 'admin') {
      this.setState({
        admin: !admin,

        // ??? reverce logic Why It works like that???
        roles: [
          { name: !admin  ? 'admin'  : '' },
          { name: banned  ? 'banned' : '' },
        ]
      });
    }

    if (name === 'banned') {
      this.setState({
        banned: !banned,

        // ??? reverce logic Why It works like that???
        roles: [
          { name: admin   ? 'admin'  : '' },
          { name: !banned ? 'banned' : '' },
        ]
      });
    }
  }

  // close page and go back to table
  closeDetail = () => this.props.history.push('/users');

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  onUploadImage = e => {
    e.preventDefault();
    this.setState({ imageLoading: true });

    // create a new form data
    const formData = new FormData();
    const { id } = this.state;

    // get image from the browser memory
    const uploadImageFile = this.fileInputImage.current.files[0];

    // append this file to form data
    formData.append('file', uploadImageFile);

    // uploadImageRequest
    uploadImage(formData, id)
      .then(res => {
        this.setState({
          image: {
            url: `${API_URL}${res.data.file.url}`
          },
          imageLoading: false
        })
      })
      .catch(error => this.catchErrors(error));
  }

  onDeleteImage  = () => this.setState({ image: { url: '' } });

  // edit request
  editSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true, errorAlertIsOpen: false });

    const { state } = this;

    editUser(state).then(res => {
      // open alert
      this.setState({ alertIsOpen: true, alertType: 'edit'});

      // close alert after 2 sec and redirect to table
      setTimeout(() => {
        this.setState({ loading: false, alertIsOpen: false});

        // push data to router
        const { history } = this.props;
        history.push({
          pathname: '/users',
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

    deleteUser(id)
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
            pathname: '/users',
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
    getUser(match.params.id).then(res => {
      const { data } = res;
      this.setState({
        loading: false,

        // fields
        id: data.id,
        name: data.name,
        oldName: `${data.name} ${data.surname}`,
        surname: data.surname,
        email: data.email,
        job_title: data.job_title,
        emailVerified: data.emailVerified,
        status: data.status,
        experience: {
          value: data.experience ? Number(data.experience) : 0,
          label: data.experience ? `${data.experience}` : '0'
        },
        image: data.image,
        skills: data.skills,
        created: data.created,
        modified: data.modified, // get modified from data
        emailSettings: data.emailSettings,
        emailJobApplication: data.emailJobApplication,
        emailMarketing: data.emailMarketing,
        seniority_id: data.seniority_id,
        location_id: data.location_id,
        user_role_id: data.user_role_id,
        userRole: data.userRole,
        role_id: data.role_id,
        roles: data.roles,
        company_id: data.company_id,
      });

      // ADMIN and BANNED RIGHtS // check for admin rights
      const { roles } = this.state;
      roles && roles.map(i => i.name === 'admin'  && this.setState({ admin: true }));
      roles && roles.map(i => i.name === 'banned' && this.setState({ banned: true }));

      // SENIORITY
      // 3. inject seniority object to react-select if we have seniority_id in the original
      const { seniority_id } = this.state;
      seniority_id ? (
        seniorityOptions.map(i => {
          i.value === seniority_id && this.setState({ seniority: i });
        })
      ) : this.setState({ seniority: {} });  // if doesn't have - reset seniority
    })

      .then(() => {
        // LOCATION
        const { location_id } = this.state;
        this.setState({ location: { id: null, name: 'Loading ...', alias_region: '' }}); // pre-loader

        location_id ? (
          getLocation(location_id).then(res => {  // get request
            this.setState({
              location: res.data,
              location_id: res.data.id
            })
          })
        ) : this.setState({
          location: { id: null, name: '', alias_region: '' }  // if doesn't have - reset
        });

        // ROLE
        const { role_id } = this.state;
        this.setState({ role: { id: null, name: 'Loading...' }}); // pre-loader

        role_id ? (
          getRole(role_id).then(res => { // get request
            this.setState({
              role: res.data,
              role_id: res.data.id
            })
          })
        ) : this.setState({
          role: { id: null, name: '' } // if doesn't have - reset
        });


        // COMPANY
        const { company_id } = this.state;
        this.setState({ company: { id: null, name: 'Loading...' }}); // pre-loader

        company_id ? (
          getCompany(company_id).then(res => { // get request
            this.setState({
              company: res.data,
              company_id: res.data.id
            })
          })
        ) : this.setState({
          company: { id: null, name: '' } // if doesn't have - reset
        });
      })
    .catch(error => this.catchErrors(error));

    // get applied count
    getUserApplied(match.params.id).then(res => {
      this.setState({ appliedCount: res.data.length > 0 ? res.data.length : 0 });
    }).catch(error => this.catchErrors(error));

  }

  render() {
    const {
      // fields
      id, name, oldName, surname, email, job_title, emailVerified, admin, status, banned, experience, skills, created, modified, emailSettings, emailJobApplication, emailMarketing, seniority_id, seniority, location, location_id, userRole, user_role_id, roles, role, role_id, company, company_id,

      // image
      image, imageLoading,

      // delete
      deleteModalIsOpen, deleteModalLoading,


      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen, // alerts
      loading, tabIndex, appliedCount                           // api
    } = this.state;


    return (
      <section className="ph-detail-page  container  edit-user">
        {
          alertIsOpen && (
            <Alerts id={id} name={name} type={alertType} errorText={alertErrorText} errorAlertIsOpen={errorAlertIsOpen}closeErrorAlert={this.closeErrorAlert} />
          )
        }

        <DeleteUser
          isOpen={deleteModalIsOpen}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
          id={id} name={name} surname={surname}
          deleteSubmit={this.deleteSubmit}
        />

        <h4 className="ph-detail-page__title">Edit: <b>{oldName}</b></h4>
        <span className="ion-close-round ph-detail-page__close" onClick={this.closeDetail} />

        {
          loading && <div className="ph-detail-page__is-loading"><Spinner /></div>
        }

        <Tabs selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList>
            <Tab>Edit user</Tab>
            <Tab>View Jobs Applied <b>({appliedCount})</b></Tab>
          </TabList>
          <TabPanel>
            <div className="cardbox">
              <div className="cardbox-body">
                <form action="" onSubmit={this.editSubmit}>

                  <fieldset>
                    <div className="form-group row">

                      {/* col-md-3  edit-user__left */}
                      <div className="col-md-3  edit-user__left">
                        <div className="edit-image">
                          <label htmlFor="edit-image" className="edit-image__label">Profile photo</label>
                          {
                            imageLoading ? <Spinner /> : (
                              (!isEmpty(image) && image.url) ? <img className="image" src={`${image.url}`} alt="image" /> : <div className="no-image">No image</div>
                            )
                          }
                          <input
                            id="edit-image"
                            type="file"
                            className="input-file-custom"
                            ref={this.fileInputImage}
                            onChange={this.onUploadImage}
                          />

                          <div className="edit-image__buttons">
                            <label htmlFor="edit-image" className="input-file-label  btn btn-light">
                              <i className="ion-image" />&nbsp;
                              <span>Choose a file</span>
                            </label>
                            <Button disabled={!image.url} outline color="danger" onClick={this.onDeleteImage}>Delete photo</Button>
                          </div>
                        </div>

                        <div className="edit-image-url" hidden={true}>
                          <label htmlFor="edit-image-url">Image URL</label>

                          <div className="input-group">
                            <input
                              name="image"
                              value={(!isEmpty(image) && image.url) ? image.url : ''}
                              id="edit-image-url"
                              onChange={this.onChangeImage}
                              type="url"
                              className="form-control"
                              placeholder="Please, paste image URL or load file"
                            />

                            <div className="input-group-append">
                              <button
                                className="btn btn-light"
                                type="button"
                                onClick={this.deleteImage}
                                disabled={!isEmpty(image) && !image.url}
                              >
                                Clear
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="created">
                          <label htmlFor="edit-created">Created</label>
                          <input
                            disabled
                            name="created"
                            value={created && `${created.substring(0, 10)}, ${created.substring(11, 16)}UTC`}
                            id="edit-created"
                            type="text"
                            className="form-control"
                          />
                        </div>

                        <div className="modified">
                          <label htmlFor="edit-modified">Modified</label>
                          <input
                            disabled
                            name="modified"
                            value={modified && `${modified.substring(0, 10)}, ${modified.substring(11, 16)}UTC`}
                            id="edit-modified"
                            type="text"
                            className="form-control"
                          />
                        </div>

                        <div className="admin">
                          <label htmlFor="edit-modified">Admin status</label>

                          <div className="custom-checkbox">
                            <label className="switch switch-warn switch-primary">
                              <input
                                id="edit-admin"
                                name="admin"
                                type="checkbox"
                                checked={admin}
                                onChange={this.onChangeRoles}
                              />
                              <span />
                            </label>

                            <label
                              htmlFor="edit-admin"
                              style={{
                                fontWeight: 'normal',
                                paddingLeft: 0,
                                marginBottom: 0
                              }}
                            >
                              { admin ? 'Site admin' : 'Not an admin' }
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* col-md-3  edit-user__left */}


                      {/* col-md-9  edit-user__right */}
                      <div className="col-md-9  edit-user__right">
                        <div className="row">

                          {/* name */}
                          <div className="col-md-4">
                            <label htmlFor="edit-name">Name</label>

                            <input
                              required
                              name="name"
                              value={name}
                              id="edit-name"
                              onChange={this.onChange}
                              type="text"
                              className="form-control"
                            />
                          </div>

                          {/* surname */}
                          <div className="col-md-4">
                            <label htmlFor="edit-name">Last name</label>

                            <input
                              required
                              name="surname"
                              value={surname}
                              id="edit-surname"
                              onChange={this.onChange}
                              type="text"
                              className="form-control"
                            />
                          </div>


                          {/* location */}
                          <div className="col-md-4">
                            <label htmlFor="edit-location_id">Location</label>
                            <input
                              hidden
                              name="location_id"
                              value={location_id}
                              id="edit-location_id"
                              onChange={this.onChange}
                              type="number"
                              className="form-control"
                            />

                            <AsyncSelect
                              menuPlacement="auto"
                              cacheOptions={true}
                              defaultOptions={true}
                              loadOptions={inputValue => getLocations(inputValue).then(res => res.data)}
                              getOptionValue={o => o.id}
                              getOptionLabel={o => (
                                <div>
                                  <span>{`${o.name && o.name + ', '} `}</span>
                                  <span style={{ color: '#3498db', textShadow: '1px 1px 0 #fff' }}>
                                    {o.alias_region}
                                  </span>
                                </div>
                              )}
                              value={location}
                              onChange={this.onChangeLocation}
                            />
                          </div>


                          {/* email */}
                          <div className="col-md-4">
                            <label htmlFor="edit-email">Email</label>

                            <input
                              required
                              name="email"
                              value={email}
                              id="edit-email"
                              onChange={this.onChange}
                              type="email"
                              className="form-control"
                            />
                          </div>


                          {/* emailVerified */}
                          <div className="col-md-4">
                            <label htmlFor="edit-emailVerified">Email verified</label>

                            <div className="custom-checkbox">
                              <label className="switch switch-warn switch-primary">
                                <input
                                  id="edit-emailVerified"
                                  name="emailVerified"
                                  type="checkbox"
                                  checked={emailVerified}
                                  onChange={this.onChange}
                                />
                                <span />
                              </label>

                              <label
                                htmlFor="edit-emailVerified"
                                style={{
                                  fontWeight: 'normal',
                                  paddingLeft: 0,
                                  marginBottom: 0
                                }}
                              >
                                {emailVerified ? 'Verified' : 'Not verified'}
                              </label>
                            </div>
                          </div>


                          {/* status */}
                          <div className="col-md-4">
                            <label htmlFor="edit-banned">User activity</label>

                            <div className="custom-checkbox">
                              <label className="switch switch-warn switch-success">
                                <input
                                  id="edit-banned"
                                  name="banned"
                                  type="checkbox"
                                  checked={!banned}
                                  onChange={this.onChangeRoles}
                                />
                                <span />
                              </label>

                              <label
                                htmlFor="edit-banned"
                                style={{
                                  fontWeight: 'normal',
                                  paddingLeft: 0,
                                  marginBottom: 0
                                }}
                              >
                                {
                                  !banned
                                    ? <span style={{ color: '#4CAF50' }}>Active</span>
                                    : <span style={{ color: '#F44336' }}>Blocked</span>
                                }
                              </label>
                            </div>
                          </div>


                          {/* skills */}
                          <div className="col-md-12">
                            <label htmlFor="edit-skills">Skills</label>
                            <AsyncSelect
                              isMulti={true}
                              menuPlacement="auto"
                              cacheOptions={true}
                              defaultOptions={true}
                              loadOptions={inputValue => getSkills(inputValue).then(res => res.data)}
                              getOptionValue={o => o.id}
                              getOptionLabel={o => o.name}
                              onChange={this.onChangeSkills}
                              value={skills}
                            />
                          </div>


                          {/* company */}
                          <div className="col-md-4">
                            <label htmlFor="edit-company_id">Current company</label>

                            <input
                              hidden
                              name="company_id"
                              value={company_id}
                              id="edit-company_id"
                              onChange={this.onChange}
                              type="number"
                              className="form-control"
                            />

                            <AsyncSelect
                              menuPlacement="auto"
                              cacheOptions={true}
                              defaultOptions={true}
                              loadOptions={inputValue => getCompanies(inputValue).then(res => res.data)}
                              getOptionValue={o => o.id}
                              getOptionLabel={o => o.name}
                              value={company}
                              onChange={this.onChangeCompany}
                            />

                          </div>


                          {/* job_title */}
                          <div className="col-md-4">
                            <label htmlFor="edit-job_title">Job title</label>

                            <input
                              name="job_title"
                              value={job_title}
                              id="edit-job_title"
                              onChange={this.onChange}
                              type="text"
                              className="form-control"
                            />
                          </div>


                          {/* role */}
                          <div className="col-md-4">
                            <label htmlFor="edit-role_id">Product role</label>

                            <input
                              hidden
                              name="role_id"
                              value={role_id}
                              id="edit-role_id"
                              onChange={this.onChange}
                              type="number"
                              className="form-control"
                            />

                            <AsyncSelect
                              menuPlacement="auto"
                              cacheOptions={true}
                              defaultOptions={true}
                              loadOptions={inputValue => getRoles(inputValue).then(res => res.data)}
                              getOptionValue={o => o.id}
                              getOptionLabel={o => o.name}
                              value={role}
                              onChange={this.onChangeRole}
                            />
                          </div>


                          {/* seniority_id */}
                          <div className="col-md-4">
                            <label htmlFor="edit-seniority_id">Seniority</label>
                            <input
                              hidden
                              name="seniority_id"
                              value={seniority_id}
                              id="edit-seniority_id"
                              onChange={this.onChange}
                              type="number"
                              className="form-control"
                            />

                            <Select
                              value={seniority}
                              onChange={this.onChangeSeniority}
                              options={seniorityOptions}
                            />
                          </div>


                          {/* experience */}
                          <div className="col-md-2">
                            <label htmlFor="edit-experience">Experience</label>

                            <input
                              hidden
                              required
                              min={0}
                              max={50}
                              name="experience"
                              value={experience.value}
                              id="edit-experience"
                              onChange={this.onChange}
                              type="number"
                              className="form-control"
                            />
                            <Select
                              value={experience}
                              onChange={this.onChangeExperience}
                              options={experienceOptions}
                            />
                          </div>


                          {/* reason */}
                          <div className="col-md-6">
                            <label htmlFor="edit-user_role_id">Main reason for using ProductHired</label>
                            <input
                              hidden
                              name="user_role"
                              value={user_role_id}
                              id="edit-user_role"
                              onChange={this.onChange}
                              type="number"
                              className="form-control"
                            />

                            <AsyncSelect
                              menuPlacement="auto"
                              cacheOptions={true}
                              defaultOptions={true}
                              loadOptions={inputValue => getUserRoles(inputValue).then(res => res.data)}
                              getOptionValue={o => o.id}
                              getOptionLabel={o => o.name}
                              value={userRole}
                              onChange={this.onChangeUserRole}
                            />
                          </div>


                          {/* notifications */}
                          <div className="col-md-9  notifications">
                            <label>Notifications</label>

                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="edit-emailSettings"
                                name="emailSettings"
                                checked={emailSettings}
                                onChange={this.onChange}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="edit-emailSettings"
                                style={{ fontWeight: 'normal' }}
                              >
                                When account settings have been modified
                              </label>
                            </div>


                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="edit-emailJobApplication"
                                name="emailJobApplication"
                                checked={emailJobApplication}
                                onChange={this.onChange}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="edit-emailJobApplication"
                                style={{ fontWeight: 'normal' }}
                              >
                                When job settings has been viewed
                              </label>
                            </div>


                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="edit-emailMarketing"
                                name="emailMarketing"
                                checked={emailMarketing}
                                onChange={this.onChange}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="edit-emailMarketing"
                                style={{ fontWeight: 'normal' }}
                              >
                                Allow receiving marketing emails
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* col-md-9  edit-user__right */}

                    </div>
                  </fieldset>

                  <footer className="ph-detail-page__buttons">
                    <Button outline color="danger" onClick={this.deleteClick}>Delete</Button>
                    <Button outline color="secondary" onClick={this.closeDetail}>Cancel</Button>
                    <Button disabled={!name || imageLoading} outline color="primary" type="submit">Save</Button>
                  </footer>

                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <UserApplied id={id} name={name} surname={surname} email={email} />
          </TabPanel>
        </Tabs>
      </section>
    );
  }
}

export default UserDetail;
