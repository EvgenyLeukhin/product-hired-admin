import React from 'react';

import { Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import Companies from './add/companies';
import Users from './add/users';
import Jobs from './add/jobs';
import Skills from './add/skills';

import { API_URL, subUrl } from './../api/apiUrl';
import uploadLogoRequest from './../api/uploadLogoRequest';
import uploadCoverRequest from './../api/uploadCoverRequest';

import './scss/edit.scss';

class AddModal extends React.Component {
  fileInputLogo = React.createRef();
  fileInputCover = React.createRef();

  state = {
    id: '',
    name: '',
    surname: '',
    password: '',
    domain: '',
    email: '',
    emailVerified: false,
    slug: '',
    weight: null,
    price: null,
    markers: null,
    status: false,
    job_title: '',
    experience: null,
    created: null,
    modified: null,
    roles: [],

    // logo
    logo: '',
    logoLoading: false,

    // cover
    cover: '',
    coverLoading: false,

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

  onSubmit = e => {
    e.preventDefault();
    const { state } = this;
    const { addRequest, dataPath } = this.props;

    // 3. editRequest func recieve current state of this component
    addRequest(state, dataPath);
  }

  render() {
    const { dataPath, closeModal, modalLoading, text } = this.props;

    // get data from the state to have onChange ability
    const {
      name, email, slug, weight, price, markers, surname, domain, logo, logoLoading, cover, coverLoading, password
    } = this.state;


    return (
      <section className="section-container edit-container">
        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        <h4 className="edit-container__title">Add {text}</h4>

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
                    password={password}
                    surname={surname}
                    onChange={this.onChange}
                  />
                )
              }

              {/* 3. Jobs */}
              {
                dataPath === 'vacancies' && (
                  <Jobs
                    name={name}
                    onChange={this.onChange}
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

              {
                modalLoading ? (
                  <div className="edit-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="edit-container__buttons">
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button outline color="primary" type="submit">Add</Button>
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

export default AddModal;
