import React from 'react';

import { Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import Companies from './edit/companies';
import Users from './edit/users';
import Jobs from './edit/jobs';
import Skills from './edit/skills';
import Roles from './edit/roles';
import Plans from './edit/plans';

import { API_URL, subUrl } from '../api/apiUrl';
import uploadLogoRequest from '../api/uploadLogoRequest';
import uploadCoverRequest from '../api/uploadCoverRequest';
import uploadImageRequest from '../api/uploadImageRequest';
import { getCurrentUser } from '../api/getUsers';

import { planValues, statusValues, seniorityValues } from '../consts';

class EditModal extends React.Component {
  fileInputLogo = React.createRef();
  fileInputCover = React.createRef();
  fileInputImage = React.createRef();

  state = {
    id: null,
    name: '',
    surname: '',
    domain: '',
    email: '',
    emailVerified: false,
    slug: '',
    details: '',
    weight: null,
    price: null,
    markers: null,
    status: true,
    job_title: '',
    experience: null,
    views: null,
    created: null,
    modified: null,
    published: null,
    role: {},
    roles: [],
    company: {},
    location: {},
    locations: [],
    skills: [],

    // logo
    logo: '',
    logoLoading: false,

    // cover
    cover: '',
    coverLoading: false,

    // image
    image: '',
    imageLoading: false,

    admin: false,
    adminObj: {},
    user: {},
    employer_id: null,
    plan: {},
    plan_id: null,
    jobStatus: '',
    seniority: null,
    experience_up: null,
    experience_from: null,
  }

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  onChangeAdmin = e => {
    const { id, admin } = this.state;

    if (e.target.checked && !admin) {
      // create template for injecting to roles[]
      const adminObj = {
        id,
        name: 'admin',
        description: null,
        created:  new Date().toISOString(),
        modified: new Date().toISOString()
      };

      this.setState(prevState => ({
        admin: true,
        // concat current roles[] with admin template or only adminObj
        roles: prevState.roles ? prevState.roles.concat(adminObj) : [adminObj]
      }));

    } else {
      this.setState(prevState => ({
        admin: false,
        // delete admin item from roles[]
        roles: prevState.roles.filter(i => i.name !== 'admin')
      }));
    }
  }

  // TODO - refactoring
  onChangeRole      = role      => this.setState({ role });
  onChangeCompany   = company   => this.setState({ company });
  onChangeSkills    = skills    => this.setState({ skills });
  onChangeDetails   = details   => this.setState({ details });
  onChangeLocation  = location  => this.setState({ location });
  onChangeLocations = locations => this.setState({ locations });
  onChangeSeniority = seniority => this.setState({ seniority });

  onChangeUser = user => {
    this.setState({
      user,
      employer_id: user.id
    });
  }

  onChangePlan = plan => {
    this.setState({
      plan,
      plan_id: plan.value
    });
  }

  onChangeStatus = jobStatus => {
    this.setState({
      jobStatus,
      status: jobStatus.value
    });
  }

  onUploadLogo = e => {
    e.preventDefault();
    this.setState({ logoLoading: true });

    // add new form data
    const formData = new FormData();

    // get image from the browser memory
    const uploadLogo = this.fileInputLogo.current.files[0];

    // append this file to form data
    formData.append('file', uploadLogo);

    // uploadLogoRequest
    uploadLogoRequest(formData)
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
    this.setState({ coverLoading: true });

    // add new form data
    const formData = new FormData();

    // get image from the browser memory
    const uploadCover = this.fileInputCover.current.files[0];

    // append this file to form data
    formData.append('file', uploadCover);

    // uploadLogoRequest
    uploadCoverRequest(formData)
      .then(res => {
        this.setState({
          cover: `${API_URL}/${subUrl}/containers/cover/download/${res.data.name}`,
          coverLoading: false
        })
      })

      // TODO
      .catch(error => console.log(error))
  }

  onUploadImage = e => {
    e.preventDefault();
    this.setState({ imageLoading: true });
    // add new form data
    const formData = new FormData();

    // get image from the browser memory
    const uploadImage = this.fileInputImage.current.files[0];

    // append this file to form data
    formData.append('file', uploadImage);

    const { id } = this.state;

    // uploadLogoRequest
    uploadImageRequest(formData, id)
      .then(res => {
        this.setState({
          image: { url: `${API_URL}${res.data.file.url}` },
          imageLoading: false
        })
      })

      // TODO
      .catch(error => console.log(error))
  }

  onSubmit = e => {
    e.preventDefault();
    const { state } = this;
    const { editRequest, dataPath } = this.props;

    // 3. editRequest func recieve current state of this component
    editRequest(state, dataPath);
  }

  componentDidMount() {
    // 1. Get values from the prop itemOriginal
    const {
      itemOriginal: {
        id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, created, modified, role, roles, domain, logo, cover, image, details, published, views, location, locations, skills, company, employer_id, plan_id, seniority, experience_up, experience_from
      }
    } = this.props;

    // 2. Set values to the state
    this.setState({
      id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, created, modified, role, roles, domain, logo, cover, image, details, published, views, location, locations, skills, company, employer_id, plan_id, seniority, experience_up, experience_from
    });

    // check for admin rights and save admin object if it is
    roles && roles.map(i => {
      i.name === 'admin' && this.setState({ admin: true });
    });

    // get current user of job
    getCurrentUser(employer_id)
      .then(this.setState({
          // preloader
          user: {
            name: '',
            surname: ''
          }
      }))
      .then(user => this.setState({ user: user.data })
      // TODO .catch()
    );

    // get current plan for job
    plan_id && planValues.map(i => {
      plan_id === i.value && this.setState({ plan: i });
    });


    // get current status for job
    status && statusValues.map(i => {
      status === i.value && this.setState({ jobStatus: i });
    });

    // get current seniority for job
    seniority && seniorityValues.map(i => {
      seniority === i.value && this.setState({ seniority: i });
    });
  }

  render() {
    const { itemOriginal, dataPath, closeModal, modalLoading } = this.props;
    // console.log('itemOriginal edit.jsx:', itemOriginal.experience_up);
    // console.log('state.seniority edit.jsx:', this.state.seniority);

    // get data from the state to have onChange ability
    const {
      name, email, slug, weight, price, markers, surname, emailVerified, status, job_title, experience, role, roles, created, modified, domain, logo, logoLoading, cover, coverLoading, image, imageLoading, admin, details, published, views, location, locations, skills, company, user, plan, jobStatus, seniority, experience_up, experience_from
    } = this.state;


    return (
      <section className="section-container edit-container">
        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        {
          dataPath === 'users' && (
            <h4 className="edit-container__title">
              Edit&nbsp;<b>{`"${itemOriginal.id} - ${itemOriginal.name} ${itemOriginal.surname}"`}</b>
            </h4>
          ) || dataPath === 'vacancies' && (
            <h4 className="edit-container__title">
              Edit&nbsp;<b>{`"${itemOriginal.id} - ${itemOriginal.name}"`}</b>&nbsp;
              {
                itemOriginal.views ? (
                  <span className="views"> (<i className="ion-ios-eye" />&nbsp;{`${itemOriginal.views}`})</span>
                ) : <span className="views"> (<i className="ion-ios-eye" />&nbsp;0)</span>
              }
            </h4>
          ) || (
            <h4 className="edit-container__title">
              Edit&nbsp;<b>{`"${itemOriginal.id} - ${itemOriginal.name}"`}</b>
            </h4>
          )
        }

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={this.onSubmit}>
              {/* 1. Companies */}
              {
                dataPath === 'companies' && (
                  <Companies
                    name={name}
                    slug={slug}
                    domain={domain}
                    weight={weight}
                    onChange={this.onChange}

                    // logo
                    logo={logo}
                    logoLoading={logoLoading}
                    onUploadLogo={this.onUploadLogo}
                    fileInputLogo={this.fileInputLogo}

                    // cover
                    cover={cover}
                    coverLoading={coverLoading}
                    onUploadCover={this.onUploadCover}
                    fileInputCover={this.fileInputCover}
                  />
                )
              }

              {/* 2. Users */}
              {
                dataPath === 'users' && (
                  <Users
                    name={name}
                    email={email}
                    roles={roles}
                    admin={admin}
                    skills={skills}
                    status={status}
                    surname={surname}
                    created={created}
                    location={location}
                    modified={modified}
                    job_title={job_title}
                    experience={experience}
                    emailVerified={emailVerified}
                    onChange={this.onChange}
                    onChangeAdmin={this.onChangeAdmin}
                    onChangeLocation={this.onChangeLocation}
                    onChangeSkills={this.onChangeSkills}

                    // image
                    image={image}
                    imageLoading={imageLoading}
                    onUploadImage={this.onUploadImage}
                    fileInputImage={this.fileInputImage}
                  />
                )
              }

              {/* 3. Jobs */}
              {
                dataPath === 'vacancies' && (
                  <Jobs
                    // logo={logo}
                    // cover={cover}
                    name={name}
                    role={role}
                    user={user}
                    plan={plan}
                    views={views}
                    skills={skills}
                    details={details}
                    company={company}
                    created={created}
                    modified={modified}
                    locations={locations}
                    published={published}
                    jobStatus={jobStatus}
                    seniority={seniority}
                    experience_up={experience_up}
                    experience_from={experience_from}

                    // onChanges
                    onChange={this.onChange}
                    onChangeRole={this.onChangeRole}
                    onChangeCompany={this.onChangeCompany}
                    onChangeSkills={this.onChangeSkills}
                    onChangeDetails={this.onChangeDetails}
                    onChangeUser={this.onChangeUser}
                    onChangeLocations={this.onChangeLocations}
                    onChangePlan={this.onChangePlan}
                    onChangeStatus={this.onChangeStatus}
                    onChangeSeniority={this.onChangeSeniority}

                    // logo
                    // logoLoading={logoLoading}
                    // onUploadLogo={this.onUploadLogo}
                    // fileInputLogo={this.fileInputLogo}

                    // cover
                    // coverLoading={coverLoading}
                    // onUploadCover={this.onUploadCover}
                    // fileInputCover={this.fileInputCover}
                  />
                )
              }

              {/* 4. Skills */}
              {
                dataPath === 'skills' && (
                  <Skills
                    name={name}
                    slug={slug}
                    weight={weight}
                    markers={markers}
                    onChange={this.onChange}
                  />
                )
              }

              {/* 5. Roles */}
              {
                dataPath === 'vacancy_roles' && (
                  <Roles
                    name={name}
                    slug={slug}
                    weight={weight}
                    onChange={this.onChange}
                  />
                )
              }

              {/* 6. Plans */}
              {
                dataPath === 'plans' && (
                  <Plans name={name} price={price} onChange={this.onChange} />
                )
              }

              {/* Buttons */}
              {
                modalLoading ? (
                  <div className="edit-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="edit-container__buttons">
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    {
                      dataPath === 'vacancies'
                        ? <Button disabled={!skills || !locations} outline color="primary" type="submit">Save</Button>
                        : <Button outline color="primary" type="submit">Save</Button>
                    }
                  </footer>
                )
              }
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default EditModal;
