import React from 'react';

import { Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import Common from './edit/common';
import Companies from './edit/companies';
import Users from './edit/users';
import Jobs from './edit/jobs';
import Skills from './edit/skills';
import Roles from './edit/roles';
import Plans from './edit/plans';

import { API_URL, subUrl } from './../api/apiUrl';
import uploadLogoRequest from './../api/uploadLogoRequest';
import uploadCoverRequest from './../api/uploadCoverRequest';
import uploadImageRequest from './../api/uploadImageRequest';

import './scss/edit.scss';

class EditModal extends React.Component {
  fileInputLogo = React.createRef();
  fileInputCover = React.createRef();
  fileInputImage = React.createRef();

  state = {
    id: null,
    name: null,
    surname: null,
    domain: null,
    email: null,
    emailVerified: false,
    slug: null,
    description: null,
    weight: null,
    price: null,
    markers: null,
    status: true,
    job_title: null,
    experience: null,
    views: null,
    created: null,
    modified: null,
    published: null,
    roles: [],

    // logo
    logo: null,
    logoLoading: false,

    // cover
    cover: null,
    coverLoading: false,

    // image
    image: null,
    imageLoading: false,

    admin: false,
    adminObj: {}
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
        // concat current roles[] with admin template
        roles: prevState.roles.concat(adminObj)
      }));

    } else {
      this.setState(prevState => ({
        admin: false,
        // delete admin item from roles[]
        roles: prevState.roles.filter(i => i.name !== 'admin')
      }));
    }
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
        id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, created, modified, roles, domain, logo, cover, image, description, published, views
      }
    } = this.props;

    // 2. Set values to the state
    this.setState({
      id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, created, modified, roles, domain, logo, cover, image, description, published, views
    });

    // check for admin rights and save admin object if it is
    roles && roles.map(i => {
      if (i.name === 'admin') this.setState({ admin: true });
    });
  }

  render() {
    const { itemOriginal, dataPath, closeModal, modalLoading } = this.props;
    // console.log('itemOriginal', itemOriginal);

    // get data from the state to have onChange ability
    const {
      id, name, email, slug, weight, price, markers, surname, emailVerified, status, job_title, experience, roles,
      created, modified, domain, logo, logoLoading, cover, coverLoading, image, imageLoading, admin, description, published, views
    } = this.state;


    return (
      <section className="section-container edit-container">
        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        {
          dataPath === 'users' ? (
            <h4 className="edit-container__title">
              Edit <b>{`"${itemOriginal.id} - ${itemOriginal.name} ${itemOriginal.surname}"`}</b>
            </h4>
          ) : (
            <h4 className="edit-container__title">
              Edit <b>{`"${itemOriginal.id} - ${itemOriginal.name}"`}</b>
            </h4>
          )
        }

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={this.onSubmit}>
              {/* Common inputs */}
              <Common id={id} name={name} onChange={this.onChange} />

              {
                dataPath === 'companies' && (
                  <Companies
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

              {
                dataPath === 'users' && (
                  <Users
                    email={email}
                    roles={roles}
                    admin={admin}
                    status={status}
                    surname={surname}
                    created={created}
                    modified={modified}
                    job_title={job_title}
                    experience={experience}
                    onChange={this.onChange}
                    onChangeAdmin={this.onChangeAdmin}
                    emailVerified={emailVerified}

                    // image
                    image={image}
                    imageLoading={imageLoading}
                    onUploadImage={this.onUploadImage}
                    fileInputImage={this.fileInputImage}
                  />
                )
              }

              {
                dataPath === 'vacancies' && (
                  <Jobs
                    slug={slug}
                    description={description}
                    created={created} modified={modified} published={published}
                    views={views}
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

              {
                dataPath === 'skills' && (
                  <Skills
                    slug={slug}
                    weight={weight}
                    markers={markers}
                    onChange={this.onChange}
                  />
                )
              }

              {
                dataPath === 'vacancy_roles' && (
                  <Roles slug={slug} weight={weight} onChange={this.onChange} />
                )
              }

              { dataPath === 'plans' && <Plans price={price} onChange={this.onChange} /> }

              {
                modalLoading ? (
                  <div className="edit-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="edit-container__buttons">
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button outline color="primary" type="submit">Save</Button>
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
