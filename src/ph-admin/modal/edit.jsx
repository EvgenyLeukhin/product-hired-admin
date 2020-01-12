import React from 'react';

import { Input, Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import './scss/edit.scss';

class EditModal extends React.Component {
  state = {
    id: null,
    name: null,
    surname: null,
    email: null,
    emailVerified: false,
    domain: null,
    slug: null,
    weight: null,
    price: null,
    markers: null,
    status: true,
    job_title: null,
    experience: null
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
        id, name, surname, email, domain, slug, weight, price, markers, emailVerified, status, job_title, experience
      }
    } = this.props;

    // 2. Set values to the state
    this.setState({
      id, name, surname, email, domain, slug, weight, price, markers, emailVerified, status, job_title, experience
    });
  }

  render() {
    const { dataPath, closeModal, modalLoading } = this.props;

    // get data from the state to have onChange ability
    const {
      id, name, email, domain, slug, weight, price, markers, surname, emailVerified, status, job_title, experience
    } = this.state;

    return (
      <>
        <form action="" onSubmit={this.onSubmit}>
          <header className="form__title">Edit <b>{`"${id} - ${name}"`}</b></header>

          {/* Common inputs */}
          <div>
            <label htmlFor="edit-id">Id</label>
            <Input
              id="edit-id"
              type="number"
              value={id}
              name="id"
              disabled
            />
          </div>

          <div>
            <label htmlFor="edit-name">Name</label>
            <Input
              id="edit-name"
              type="text"
              value={name}
              name="name"
              onChange={this.onChange}
            />
          </div>

          {/* 2. Users */}
          {
            dataPath === 'users' && (
              <>
                <div>
                  <label htmlFor="edit-surname">Surname</label>
                  <Input
                    id="edit-surname"
                    type="text"
                    value={surname}
                    name="surname"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-email">Email</label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-job-title">Job Title</label>
                  <Input
                    id="edit-job-title"
                    type="text"
                    value={job_title}
                    name="job_title"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-experience">Experience</label>
                  <Input
                    id="edit-experience"
                    type="number"
                    value={experience}
                    name="experience"
                    onChange={this.onChange}
                  />
                </div>

                <div className="checkbox-wrapper">
                  <label htmlFor="edit-email-verified">Email verified</label>
                  <Input
                    id="edit-email-verified"
                    type="checkbox"
                    name="emailVerified"
                    checked={emailVerified}
                    onChange={this.onChange}
                  />
                </div>

                <div className="checkbox-wrapper">
                  <label htmlFor="edit-user-status">Active status</label>
                  <Input
                    id="edit-user-status"
                    type="checkbox"
                    name="status"
                    checked={status}
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          }

          {/* 4. Skills */}
          {
            dataPath === 'skills' && (
              <>
                <div>
                  <label htmlFor="edit-weight">Weight</label>
                  <Input
                    id="edit-weight"
                    disabled
                    type="number"
                    value={weight}
                    name="weight"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-slug">Slug</label>
                  <Input
                    id="edit-slug"
                    type="text"
                    value={slug}
                    name="slug"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-aliases">Aliases</label>
                  <Input
                    id="edit-aliases"
                    type="text"
                    value={markers}
                    name="aliases"
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          }

          {/* 5. Roles */}
          {
            dataPath === 'vacancy_roles' && (
              <>
                <div>
                  <label htmlFor="edit-slug">Slug</label>
                  <Input
                    id="edit-slug"
                    type="text"
                    value={slug}
                    name="slug"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-weight">Weight</label>
                  <Input
                    id="edit-weight"
                    type="number"
                    value={weight}
                    name="weight"
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          }

          {/* 6. Plans */}
          {
            dataPath === 'plans' && (
              <>
                <div>
                  <label htmlFor="edit-price">Price</label>
                  <Input
                    id="edit-price"
                    type="number"
                    value={price}
                    name="price"
                    onChange={this.onChange}
                  />
                </div>
              </>
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
