// ---------------- LIBS ---------------- //
import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import isEmpty from 'lodash/isEmpty';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// ---------------- LIBS ---------------- //



// ---------------- COMPONENTS ---------------- //
import DeleteJob from './delete';
import JobApplied from './applied';
import Alerts from '../../components/Alerts/index2.jsx';
import Spinner from '../../../components/Spinner';
// ---------------- COMPONENTS ---------------- //



// ---------------- API ---------------- //
import { API_URL, subUrl } from '../../api/apiUrl';
import getJob    from './api/getJob';
import editJob   from './api/editJob';
import deleteJob from './api/deleteJob';
import uploadLogo   from './api/uploadLogo';
import uploadCover  from './api/uploadCover';

import getSkills       from './api/getSkills';
import getLocations    from './api/getLocations';
import getCompanies    from './api/getCompanies';
import getCompany      from './api/getCompany';
import getUsers        from './api/getUsers';
import getUser         from './api/getUser';
import getVacancies    from './api/getVacancies';
import getVacancy      from './api/getVacancy';

import seniorityOptions      from './api/seniorityOptions';
import statusOptions         from './api/statusOptions';
import planOptions           from './api/planOptions';
import experienceFromOptions from './api/experienceFromOptions';
import experienceUpOptions   from './api/experienceUpOptions';
// ---------------- API ---------------- //

import './edit.scss';



class JobDetail extends React.Component {
  fileInputLogo = React.createRef();
  fileInputCover = React.createRef();



  // ---------------- STATE ---------------- //
  state = {
    alertIsOpen: false, alertType: '', alertErrorText: '', // alerts
    loading: false,                                        // api
    deleteModalIsOpen: false, deleteModalLoading: false,   // delete

    // fields
    id: null,
    created: '',
    modified: '',
    published: `${new Date().toISOString()}`,
    views: null, impressions: '',

    skills: [], locations: [],
    seniorityObj: {}, seniority: null,
    statusObj: { label: 'Draft', value: 'draft' }, status: 'draft',
    planObj: { label: 'Null', value: null }, plan_id: null,

    name: '', oldName: '',
    company: { name: '' }, company_id: null,
    user: { name: '', surname: '', email: '' }, user_id: null,
    employer: { name: '', surname: '', email: '' }, employer_id: null,
    experience_from: { value: 0, label: '0' },
    experience_up: { value: 1, label: '1' },
    vacancy: { id: 1, name: 'Product Manager' }, vacancy_role: 1,
    details: '',

    // images
    logo: '', cover: '',
    logoLoading: false, coverLoading: false,
    logoSwitcher: false, coverSwitcher: false,

    // default state fields when add job
    application_link: null, application_type: 0, hash: null,

    tabIndex: 0,
  }
  // ---------------- STATE ---------------- //



  // ---------------- ONCHANGE ---------------- //
  onChange            = e            => this.setState({ [e.target.name]: e.target.value });
  onChangeCompany     = company      => this.setState({ company });
  onChangeLocations   = locations    => this.setState({ locations });
  onChangeDetails     = details      => this.setState({ details });
  onChangeSkills      = skills       => this.setState({ skills });
  onChangeSeniority   = seniorityObj => this.setState({ seniorityObj, seniority: seniorityObj.value });
  onChangeStatus      = statusObj    => this.setState({ statusObj, status: statusObj.value });
  onChangePlan        = planObj      => this.setState({ planObj, plan_id: planObj.value });
  onChangeCompany     = company      => this.setState({ company, company_id: company.id });
  onChangeUser        = user         => this.setState({ user, employer: user, employer_id: user.id });
  onChangeVacancy     = vacancy      => this.setState({ vacancy, vacancy_role: vacancy.id });

  onChangeExperienceFrom = experience_from => this.setState({ experience_from });
  onChangeExperienceUp   = experience_up   => this.setState({ experience_up });
  // ---------------- ONCHANGE ---------------- //



  // ---------------- CLOSE ---------------- //
  closeDetail      = () => this.props.history.push('/jobs');
  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }
  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });
  // ---------------- CLOSE ---------------- //



  // ---------------- EDIT ---------------- //
  editSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { state } = this;
    editJob(state).then(res => {
      // open alert
      this.setState({ alertIsOpen: true, alertType: 'edit'});

      // close alert after 2 sec and redirect to table
      setTimeout(() => {
        this.setState({ loading: false, alertIsOpen: false});

        // push data to router
        const { history } = this.props;
        history.push({
          pathname: '/jobs',
          state: {
            afterEditData: res.data,
            detailState: state,
          }
        });
      }, 2000);

    }).catch(error => this.catchErrors(error));
  }
  // ---------------- EDIT ---------------- //



  // ---------------- DELETE ---------------- //
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

    deleteJob(id)
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
            pathname: '/jobs',
            state: { deletedId: id }
          });

          this.setState({ alertIsOpen: false });
        }, 2000);
      })
      .catch(error => this.catchErrors(error));
  }
  // ---------------- DELETE ---------------- //



  // ---------------- LOGO & COVER ---------------- //
  onUploadLogo = e => {
    e.preventDefault();
    this.setState({
      logoLoading: true,
      logoSwitcher: true
    });

    // add new form data
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

      // TODO
      .catch(error => console.log(error))
  }

  onUploadCover = e => {
    e.preventDefault();
    this.setState({
      coverLoading: true,
      coverSwitcher: true
    });

    // add new form data
    const formData = new FormData();

    // get image from the browser memory
    const uploadCoverFile = this.fileInputCover.current.files[0];

    // append this file to form data
    formData.append('file', uploadCoverFile);

    // uploadLogoRequest
    uploadCover(formData)
      .then(res => {
        this.setState({
          cover: `${API_URL}/${subUrl}/containers/cover/download/${res.data.name}`,
          coverLoading: false
        })
      })

      // TODO
      .catch(error => console.log(error))
  }

  onDeleteLogo  = () => this.setState({ logo: '', logoSwitcher: false });
  onDeleteCover = () => this.setState({ cover: '', coverSwitcher: false });
  // ---------------- LOGO & COVER ---------------- //


  onCopyUser = e => {
    e.preventDefault();

    this.setState({ alertType: 'copy', alertIsOpen: true });

    // close alert after 2 sec
    setTimeout(() => {
      this.setState({ alertIsOpen: false });
    }, 2000);
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



  // ---------------- LIFECYCLE ---------------- //
  componentDidMount() {
    const { match } = this.props;

    this.setState({ loading: true });

    // get request
    getJob(match.params.id).then(res => {
      const { data } = res;
      const { id, name, created, modified, published, views, impressions, details, skills, seniority, status, plan_id, employer_id, company, company_id, locations, vacancy_role, vacancy, logo, cover } = data;

      this.setState({
        loading: false,
        oldName: data.name,

        // save data to state from react-table
        id, name, created, modified, published, views, impressions, details, skills, seniority, status, plan_id,employer_id, company, company_id, locations, vacancy_role, vacancy, logo, cover,

        experience_up:   { value: data.experience_up,   label: `${data.experience_up}` },
        experience_from: { value: data.experience_from, label: `${data.experience_from}` },
      });



      // SENIORITY (get current seniorityObj {} from options mapping)
      seniority ? (
        seniorityOptions.map(i => {
          i.value === seniority && this.setState({ seniorityObj: i });
        })
      ) : this.setState({ seniorityObj: {} });  // if doesn't have - reset seniority



      // STATUS (get current statusObj {} from options mapping)
      status ? statusOptions.map(i => {
        status === i.value && this.setState({ statusObj: i });
      }) : this.setState({ statusObj: {} });



      // PLAN (get current planObj {} from options mapping)
      plan_id ? planOptions.map(i => {
        plan_id === i.value && this.setState({ planObj: i });
      }) : this.setState({ planObj: { label: "Null", value: null } });

    }).then(() => {
      // async code

      // COMPANY (get current company {} by request)
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


      // USER (get current user {} by request)
      const { employer_id } = this.state;
      this.setState({ user: { name: 'Loading ...', surname: '', email: '' }}); // pre-loader

      employer_id ? (
        getUser(employer_id).then(res => { // get request
          this.setState({ user: res.data, employer: res.data, employer_id: res.data.id });
        })
      ) : this.setState({
        // if doesn't have - reset
        user:     { name: '', surname: '', email: '' },
        employer: { name: '', surname: '', email: '' }
      });


      // VACANCY (get current vacancy {} by request)
      const { vacancy_role } = this.state;
      this.setState({ vacancy: { name: 'Loading ...' }}); // pre-loader

      vacancy_role ? (
        getVacancy(vacancy_role).then(res => {    // get request
          this.setState({ vacancy: res.data, vacancy_role: res.data.id });
        })
      ) : this.setState({ vacancy: { name: '' }}); // if doesn't have - reset
    })
    .catch(error => this.catchErrors(error));
  }
  // ---------------- LIFECYCLE ---------------- //



  render() {
    const {
      // fields
      id, name, oldName, user, employer_id, created, modified, published, views, impressions, details,
      experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj,
      plan_id, planObj, company_id, company, locations, vacancy_role, vacancy,

      // images
      logo, cover, logoSwitcher, coverSwitcher, logoLoading, coverLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen,

      // api
      loading, tabIndex,

      // delete
      deleteModalIsOpen, deleteModalLoading,
    } = this.state;

    const createdString = created && `${created.substring(0, 10)}, ${created.substring(11, 16)} UTC`;

    let logoUrl = `${API_URL}/${subUrl}/containers/logo/download/${logo}`;
    let coverUrl = `${API_URL}/${subUrl}/containers/cover/download/${cover}`;

    // // fix problem with open item after additing image
    if (!logoSwitcher && logo && logo.includes('http')) {
      const logoSplit = logo.split('/').pop();
      logoUrl = `${API_URL}/${subUrl}/containers/logo/download/${logoSplit}`;
    }

    if (!coverSwitcher && cover && cover.includes('http')) {
      const coverSplit = cover.split('/').pop();
      coverUrl = `${API_URL}/${subUrl}/containers/cover/download/${coverSplit}`;
    }


    return (
      <section className="ph-detail-page  container  edit-job">
        <DeleteJob
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

        <Tabs selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList>
            <Tab>Edit job</Tab>
            <Tab>View Talants Applied (0)</Tab>
          </TabList>
          <TabPanel>
            <div className="cardbox">
              <div className="cardbox-body">
                <form action="" onSubmit={this.editSubmit}>

                  <fieldset>
                    <div className="form-group row top-fields">
                      {/* created */}
                      <div className="col-md-4 col-sm-6">
                        <b>Created</b>
                        <span>{createdString || ''}</span>
                      </div>

                      {/* views */}
                      <div className="col-md-2 col-sm-6">
                        <b>Views</b>
                        <span>{views || 0}</span>
                      </div>

                      {/* impressions */}
                      <div className="col-md-2 col-sm-6">
                        <b>Impressions</b>
                        <span>{impressions || 0}</span>
                      </div>

                      {/* job-link */}
                      <div className="col-md-4 col-sm-6  job-link">
                        <b>Link to the job</b>
                        <a
                          target="_blank"
                          href={`${API_URL}/jobs/${id}`}
                          title={`${API_URL}/jobs/${id}`}
                        >{`${`${API_URL}/jobs/${id}`}`}</a>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div className="form-group row">
                      {/* name */}
                      <div className="col-md-5">
                        <label htmlFor="edit-name">Job title</label>
                        <input
                          name="name"
                          type="text"
                          value={name}
                          id="edit-name"
                          style={{ height: '38px'}}
                          onChange={this.onChange}
                          className="form-control"
                        />
                      </div>

                      {/* plan */}
                      <div className="col-md-2">
                        <label htmlFor="edit-plan_id">Plan</label>
                        <input
                          hidden
                          name="plan_id"
                          value={plan_id}
                          id="edit-plan_id"
                          onChange={this.onChange}
                          type="number"
                          className="form-control"
                        />

                        <Select
                          value={planObj}
                          onChange={this.onChangePlan}
                          options={planOptions}
                        />
                      </div>

                      {/* published */}
                      <div className="col-md-3">
                        <label htmlFor="edit-published">Published</label>
                        <input
                          type="date"
                          name="published"
                          id="edit-published"
                          value={published ? published.substring(0, 10) : ''}
                          style={{ height: '38px'}}
                          onChange={this.onChange}
                          className="form-control"
                        />
                      </div>

                      {/* status */}
                      <div className="col-md-2">
                        <label htmlFor="edit-status">Status</label>
                        <input
                          hidden
                          name="status"
                          value={status}
                          id="edit-status"
                          onChange={this.onChange}
                          type="text"
                          className="form-control"
                        />

                        <Select
                          value={statusObj}
                          onChange={this.onChangeStatus}
                          options={statusOptions}
                        />
                      </div>

                      {/* user */}
                      <div className="col-md-5">
                        <label htmlFor="edit-employer_id">
                          User:&nbsp;
                          <Link
                            style={{ fontWeight: 'normal' }}
                            to={`/users/${employer_id}`}
                            title={`.../users/${employer_id}`}
                            target='_blank'>
                            edit in a new tab
                          </Link>
                        </label>
                        <input
                          hidden
                          name="employer_id"
                          value={employer_id}
                          id="edit-employer_id"
                          onChange={this.onChange}
                          type="number"
                          className="form-control"
                        />

                        <AsyncSelect
                          menuPlacement="auto"
                          cacheOptions={true}
                          defaultOptions={true}
                          loadOptions={inputValue => getUsers(inputValue).then(res => res.data)}
                          getOptionValue={o => o.id}
                          getOptionLabel={o => (
                            <div>
                              <span>{`${o.name} ${o.surname} `}</span>
                              <span style={{ color: '#3498db', textShadow: '1px 1px 0 #fff' }}>
                                {o.email}
                              </span>
                            </div>
                          )}
                          onChange={this.onChangeUser}
                          value={user}
                        />
                      </div>

                      {/* copy button */}
                      <div className="col-md-2  copy-button">
                        <CopyToClipboard text={`${user.name} ${user.surname} <${user.email}>`}>
                          <Button
                            title="Copy user data to clipboard"
                            disabled={!user} outline
                            color="primary"
                            onClick={this.onCopyUser}
                          >
                            Copy user
                          </Button>
                        </CopyToClipboard>
                      </div>

                      {/* company */}
                      <div className="col-md-5">
                        <label htmlFor="edit-company_id">
                          Company:&nbsp;
                          <Link
                            style={{ fontWeight: 'normal' }}
                            to={`/companies/${company_id}`}
                            title={`.../companies/${company_id}`}
                            target='_blank'>
                            edit in a new tab
                          </Link>
                        </label>
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
                          onChange={this.onChangeCompany}
                          value={company}
                        />
                      </div>

                      {/* locations */}
                      <div className="col-md-12">
                        <label htmlFor="edit-locations">Locations</label>
                        <AsyncSelect
                          isMulti={true}
                          menuPlacement="auto"
                          cacheOptions={true}
                          defaultOptions={true}
                          loadOptions={inputValue => getLocations(inputValue).then(res => res.data)}
                          getOptionValue={o => o.id}
                          getOptionLabel={o => (
                            <div>
                              <span>{`${o.name && o.name + ', '} `}</span>
                              <span style={{ color: '#448aff' }}>{o.alias_region}</span>
                            </div>
                          )}
                          onChange={this.onChangeLocations}
                          value={locations}
                        />
                      </div>

                      {/* vacancy */}
                      <div className="col-md-3">
                        <label htmlFor="edit-vacancy_role">Role</label>
                        <input
                          hidden
                          name="vacancy_role"
                          value={vacancy_role}
                          id="edit-vacancy_role"
                          onChange={this.onChange}
                          type="number"
                          className="form-control"
                        />

                        <AsyncSelect
                          menuPlacement="auto"
                          cacheOptions={true}
                          defaultOptions={true}
                          loadOptions={inputValue => getVacancies(inputValue).then(res => res.data)}
                          getOptionValue={o => o.id}
                          getOptionLabel={o => o.name}
                          value={vacancy}
                          onChange={this.onChangeVacancy}
                        />
                      </div>

                      {/* experience_from */}
                      <div className="col-md-3">
                        <label htmlFor="edit-experience_from">Experience, from</label>
                        <input
                          hidden
                          min={0}
                          max={9}
                          type="number"
                          onChange={this.onChange}
                          name="experience_from"
                          value={experience_from}
                          id="edit-experience_from"
                          className="form-control"
                        />
                        <Select
                          value={experience_from}
                          onChange={this.onChangeExperienceFrom}
                          options={experienceFromOptions}
                        />
                      </div>

                      {/* experience_to */}
                      <div className="col-md-3">
                        <label htmlFor="edit-experience_up">Experience, to</label>
                        <input
                          hidden
                          min={1}
                          max={10}
                          type="number"
                          onChange={this.onChange}
                          name="experience_up"
                          value={experience_up}
                          id="edit-experience_up"
                          className="form-control"
                        />
                        <Select
                          value={experience_up}
                          onChange={this.onChangeExperienceUp}
                          options={experienceUpOptions}
                        />
                      </div>

                      {/* seniority */}
                      <div className="col-md-3">
                        <label htmlFor="edit-seniority">Seniority</label>

                        <input
                          hidden
                          name="seniority"
                          value={seniority}
                          id="edit-seniority"
                          onChange={this.onChange}
                          type="number"
                          className="form-control"
                        />

                        <Select
                          value={seniorityObj}
                          onChange={this.onChangeSeniority}
                          options={seniorityOptions}
                        />
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

                      {/* logo */}
                      <div className="col-md-6  edit-logo">
                        <label htmlFor="edit-logo">Logo</label>
                        {
                          !logoSwitcher ? (
                            logo ? <img className="logo" src={logoUrl} alt="logo" />
                                : <div className="no-logo">No logo</div>
                          ) : (
                            logoLoading ? <Spinner /> : (
                              logo && <img className="logo" src={logo} alt="logo" />
                            )
                          )
                        }
                        <input
                          id="edit-logo"
                          type="file"
                          className="input-file-custom"
                          ref={this.fileInputLogo}
                          onChange={this.onUploadLogo}
                        />

                        <div className="edit-logo__buttons">
                          <label htmlFor="edit-logo" className="input-file-label  btn btn-light">
                            <i className="ion-image" />&nbsp;
                            <span>Load logo</span>
                          </label>
                          <Button disabled={!logo || !logoUrl} outline color="danger" onClick={this.onDeleteLogo}>Delete logo</Button>
                        </div>
                      </div>

                      {/* cover */}
                      <div className="col-md-6  edit-cover">
                        <label htmlFor="edit-cover">Cover</label>
                        {
                          !coverSwitcher ? (
                            cover ? <img className="cover" src={coverUrl} alt="cover" />
                                  : <div className="no-cover">No cover</div>
                          ) : (
                            coverLoading ? <Spinner /> : (
                              cover && <img className="cover" src={cover} alt="cover" />
                            )
                          )
                        }
                        <input
                          id="edit-cover"
                          type="file"
                          className="input-file-custom"
                          ref={this.fileInputCover}
                          onChange={this.onUploadCover}
                        />
                        <div className="edit-cover__buttons">
                          <label htmlFor="edit-cover" className="input-file-label  btn btn-light">
                            <i className="ion-image" />&nbsp;
                            <span>Load cover</span>
                          </label>
                          <Button disabled={!cover || !coverUrl} outline color="danger" onClick={this.onDeleteCover}>Delete cover</Button>
                        </div>
                      </div>

                      {/* details */}
                      <div className="col-md-12">
                        <label htmlFor="edit-details">Details</label>

                        <CKEditor
                          editor={ClassicEditor}
                          data={details}
                          onInit={ editor => {
                              // You can store the "editor" and use when it is needed.
                              // console.log( 'Editor is ready to use!', editor );
                          } }
                          // onChange={onChangeDetails}
                          onChange={ ( event, editor ) => {
                              const data = editor.getData();
                              // console.log( { event, editor, data } );
                              this.onChangeDetails(data);
                          } }
                          onBlur={ ( event, editor ) => {
                              // console.log( 'Blur.', editor );
                          } }
                          onFocus={ ( event, editor ) => {
                              // console.log( 'Focus.', editor );
                          } }
                        />
                      </div>
                    </div>
                  </fieldset>


                  <footer className="ph-detail-page__buttons">
                    <Button outline color="danger" onClick={this.deleteClick}>Delete</Button>
                    <Button outline color="secondary" onClick={this.closeDetail}>Cancel</Button>
                    <Button disabled={!name || isEmpty(locations) || isEmpty(skills)} outline color="primary" type="submit">Save</Button>
                  </footer>

                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <JobApplied id={id} />
          </TabPanel>
        </Tabs>
      </section>
    );
  }
}

export default JobDetail;
