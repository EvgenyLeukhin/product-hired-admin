import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import isEmpty from 'lodash/isEmpty';

import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";

import getSkills    from './api/getSkills';
import getLocations from './api/getLocations';
import getRoles     from './api/getRoles';
import getUserRoles from './api/getUserRoles';
import getCompanies from './api/getCompanies';
import seniorityOptions from './api/seniorityOptions';


import './edit.scss';


const EditUser = ({
  // fields
  original, name, surname, email, job_title, emailVerified, admin, status, experience, skills, created, modified, emailSettings, emailJobApplication, emailMarketing, seniority, seniority_id, location, location_id, user_role, user_role_id, role, role_id, company, company_id,

  // image
  image, imageLoading, fileInputImage, onUploadImage, deleteImage, onChangeImage,

  isOpen, closeModal, onChange, onSubmit, modalLoading, deleteClick, onChangeSkills, onChangeLocation, onChangeSeniority, onChangeUserRole, onChangeRole, onChangeCompany
}) => {

  console.log('EditUser:', modified); // original

  return (
    <EditModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container edit-container edit-user">
        <h4 className="edit-container__title">
          Edit&nbsp;<b>{`"${original.id} - ${original.name} ${original.surname}"`}</b>
        </h4>

        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

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
                        ref={fileInputImage}
                        onChange={onUploadImage}
                      />
                      <label htmlFor="edit-image" className="input-file-label  btn btn-light">
                        <i className="ion-image" />&nbsp;
                        <span>Choose a file</span>
                      </label>
                    </div>

                    <div className="edit-image-url" hidden={true}>
                      <label htmlFor="edit-image-url">Image URL</label>

                      <div className="input-group">
                        <input
                          name="image"
                          value={(!isEmpty(image) && image.url) ? image.url : ''}
                          id="edit-image-url"
                          onChange={onChangeImage}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste image URL or load file"
                        />

                        <div className="input-group-append">
                          <button
                            className="btn btn-light"
                            type="button"
                            onClick={deleteImage}
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
                      <div className="custom-checkbox">
                        <label className="switch switch-warn switch-primary">
                          <input
                            id="edit-admin"
                            name="admin"
                            type="checkbox"
                            defaultChecked={admin ? true : false}
                            value={admin}
                            onChange={onChange}
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
                          {admin ? 'Admin rights' : 'Not admin'}
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
                          onChange={onChange}
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
                          onChange={onChange}
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
                          onChange={onChange}
                          type="number"
                          className="form-control"
                        />

                        <AsyncSelect
                          menuPlacement="auto"
                          cacheOptions={true}
                          defaultOptions={true}
                          loadOptions={inputValue => getLocations(inputValue).then(res => res.data)}
                          getOptionValue={o => o.id}
                          getOptionLabel={o => `${o.name} ${o.alias_region}`}
                          value={location}
                          onChange={onChangeLocation}
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
                          onChange={onChange}
                          type="text"
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
                              defaultChecked={emailVerified ? true : false}
                              value={emailVerified}
                              onChange={onChange}
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
                        <label htmlFor="edit-status">User activity</label>

                        <div className="custom-checkbox">
                          <label className="switch switch-warn switch-success">
                            <input
                              id="edit-status"
                              name="status"
                              type="checkbox"
                              defaultChecked={status}
                              value={status}
                              onChange={onChange}
                            />
                            <span />
                          </label>

                          <label
                            htmlFor="edit-status"
                            style={{
                              fontWeight: 'normal',
                              paddingLeft: 0,
                              marginBottom: 0
                            }}
                          >
                            {
                              status
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
                          onChange={onChangeSkills}
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
                          onChange={onChange}
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
                          onChange={onChangeCompany}
                        />

                      </div>


                      {/* job_title */}
                      <div className="col-md-4">
                        <label htmlFor="edit-job_title">Job title</label>

                        <input
                          required
                          name="job_title"
                          value={job_title}
                          id="edit-job_title"
                          onChange={onChange}
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
                          onChange={onChange}
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
                          onChange={onChangeRole}
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
                          onChange={onChange}
                          type="number"
                          className="form-control"
                        />

                        <Select
                          value={seniority}
                          onChange={onChangeSeniority}
                          options={seniorityOptions}
                        />
                      </div>


                      {/* experience */}
                      <div className="col-md-2">
                        <label htmlFor="edit-experience">Experience</label>

                        <input
                          required
                          min={0}
                          max={50}
                          name="experience"
                          value={experience}
                          id="edit-experience"
                          onChange={onChange}
                          type="number"
                          className="form-control"
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
                          onChange={onChange}
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
                          value={user_role}
                          onChange={onChangeUserRole}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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

              {
                modalLoading ? (
                  <div className="edit-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="edit-container__buttons">
                    <Button outline color="danger" onClick={deleteClick}>Delete</Button>
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button disabled={!name} outline color="primary" type="submit">Save</Button>
                  </footer>
                )
              }
            </form>
          </div>
        </div>
      </section>
    </EditModal>
  );
}

export default EditUser;
