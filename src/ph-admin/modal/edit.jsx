import React from 'react';

import { Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import Common from './edit-modals/common';
import Companies from './edit-modals/companies';
import Users from './edit-modals/users';
import Skills from './edit-modals/skills';
import Roles from './edit-modals/roles';
import Plans from './edit-modals/plans';

import './scss/edit.scss';

class EditModal extends React.Component {
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
    logo: null,
  }

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  onSubmit = (e) => {
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
        id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, roles, domain, logo
      }
    } = this.props;

    // 2. Set values to the state
    this.setState({
      id, name, surname, email, slug, weight, price, markers, emailVerified, status, job_title, experience, roles, domain, logo
    });
  }

  render() {
    const { itemOriginal, dataPath, closeModal, modalLoading } = this.props;
    // console.log(itemOriginal);

    // get data from the state to have onChange ability
    const {
      id, name, email, slug, weight, price, markers, surname, emailVerified, status, job_title, experience, roles,
      domain, logo
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
                logo={logo}
                domain={domain}
                weight={weight}
                onChange={this.onChange}
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
              <Roles
                slug={slug}
                weight={weight}
                onChange={this.onChange}
              />
            )
          }

          {/* 6. Plans +++ */}
          {
            dataPath === 'plans' && (
              <Plans
                price={price}
                onChange={this.onChange}
              />
            )
          }

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
