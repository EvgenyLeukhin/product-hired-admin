import React from 'react';

import { Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import Common from './parts/common';
import Companies from './parts/companies';
import Users from './parts/users';
import Skills from './parts/skills';
import Roles from './parts/roles';
import Plans from './parts/plans';

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
    weight: null,
    price: null,
    markers: null,
    status: true,
    job_title: null,
    experience: null,
    created: null,
    modified: null,
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
  }

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
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
        id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, created, modified, roles, domain, logo, cover, image
      }
    } = this.props;

    // 2. Set values to the state
    this.setState({
      id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, created, modified, roles, domain, logo, cover, image
    });

    // check for admin rights
    roles && roles.map(i => {
      if (i.name === 'admin') {
        this.setState({ admin: true });
      }
    });
  }

  render() {
    const { itemOriginal, dataPath, closeModal, modalLoading } = this.props;
    // console.log('itemOriginal', itemOriginal);

    // get data from the state to have onChange ability
    const {
      id, name, email, slug, weight, price, markers, surname, emailVerified, status, job_title, experience, roles,
      created, modified, domain, logo, logoLoading, cover, coverLoading, image, imageLoading, admin
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

              {/* 1. Companies --- */}
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

              {/* 2. Users +-- */}
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
                    emailVerified={emailVerified}

                    // image
                    image={image}
                    imageLoading={imageLoading}
                    onUploadImage={this.onUploadImage}
                    fileInputImage={this.fileInputImage}
                  />
                )
              }

              {/* 4. Skills +++ */}
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

              {/* 5. Roles */}
              {
                dataPath === 'vacancy_roles' && (
                  <Roles slug={slug} weight={weight} onChange={this.onChange} />
                )
              }

              {/* 6. Plans */}
              { dataPath === 'plans' && <Plans price={price} onChange={this.onChange} /> }

              {
                modalLoading ? (
                  <div className="edit-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="edit-container__buttons">
                    <>
                      <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                      <Button outline color="primary" type="submit">Save</Button>
                    </>
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
