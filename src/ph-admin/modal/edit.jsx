import React from 'react';

import { Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import Common from './edit-modals/common';
import Companies from './edit-modals/companies';
import Users from './edit-modals/users';
import Skills from './edit-modals/skills';
import Roles from './edit-modals/roles';
import Plans from './edit-modals/plans';

import API_URL from './../api/apiUrl';
import uploadLogoRequest from './../api/uploadLogoRequest';
import uploadCoverRequest from './../api/uploadCoverRequest';

import './scss/edit.scss';

class EditModal extends React.Component {
  fileInputLogo = React.createRef();
  fileInputCover = React.createRef();

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
    roles: [],

    // logo
    logo: null,
    logoLoading: false,

    // cover
    cover: null,
    coverLoading: false,
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
          logo: `${API_URL}/containers/logo/download/${res.data.name}`,
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
    const uploadcover = this.fileInputCover.current.files[0];

    // append this file to form data
    formData.append('file', uploadcover);

    // uploadLogoRequest
    uploadCoverRequest(formData)
      .then(res => {
        this.setState({
          cover: `${API_URL}/containers/cover/download/${res.data.name}`,
          coverLoading: false
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
        id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, roles, domain, logo, cover
      }
    } = this.props;

    // 2. Set values to the state
    this.setState({
      id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, roles, domain, logo, cover
    });
  }

  render() {
    const { itemOriginal, dataPath, closeModal, modalLoading } = this.props;
    // console.log(itemOriginal);

    // get data from the state to have onChange ability
    const {
      id, name, email, slug, weight, price, markers, surname, emailVerified, status, job_title, experience, roles,
      domain, logo, logoLoading, cover, coverLoading
    } = this.state;

    return (
      <>
        <form action="" onSubmit={this.onSubmit}>
          <header className="form__title">Edit <b>{`"${itemOriginal.id} - ${itemOriginal.name}"`}</b></header>

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
                status={status}
                surname={surname}
                job_title={job_title}
                experience={experience}
                onChange={this.onChange}
                emailVerified={emailVerified}
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

          {/* 5. Roles +++ */}
          {
            dataPath === 'vacancy_roles' && (
              <Roles slug={slug} weight={weight} onChange={this.onChange} />
            )
          }

          {/* 6. Plans +++ */}
          { dataPath === 'plans' && <Plans price={price} onChange={this.onChange} /> }

          <footer className="form__buttons">
            {
              modalLoading ? <Spinner /> : (
                <>
                  <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                  <Button outline color="primary" type="submit">Save</Button>
                </>
              )
            }
          </footer>
        </form>
      </>
    )
  }
}

export default EditModal;
