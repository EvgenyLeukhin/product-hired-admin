import React from 'react';
import Spinner from '../../../components/Spinner';

import { Location } from '../../selects/location';
import Skills from '../../selects/skills';

const Users = props => {
  const {
    surname,
    email,
    job_title,
    experience,
    emailVerified,
    status,
    created,
    modified,
    roles,
    admin,
    location,
    skills,
    image,
    imageLoading,
    fileInputImage,
    onUploadImage,
    onChange,
    onChangeAdmin,
    onChangeLocation,
    onChangeSkills
  } = props;

  const locationId = location && `${location.id} - ${location.alias_region} (${location.country})` || '';

  return (
    <>
      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-surname">Surname</label>

          <div className="col-md-4">
            <input
              name="surname"
              value={surname}
              id="edit-surname"
              onChange={onChange}
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-email">Email</label>

          <div className="col-md-4">
            <input
              name="email"
              value={email}
              id="edit-email"
              onChange={onChange}
              type="email"
              className="form-control input-rounded"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-job_title">Job title</label>

          <div className="col-md-10">
            <input
              name="job_title"
              value={job_title}
              id="edit-job_title"
              onChange={onChange}
              type="text"
              className="form-control input-rounded"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-location_id">Location ID</label>

          <div className="col-md-4">
            <input
              disabled
              name="location_id"
              value={locationId}
              id="edit-location_id"
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-city">City</label>

          <div className="col-md-4">
            <Location
              value={location}
              onChange={location => onChangeLocation(location)}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-skills">Skills</label>

          <div className="col-md-10">
            <Skills
              value={skills}
              onChange={skills => onChangeSkills(skills)}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-created">Created</label>

          <div className="col-md-4">
            <input
              name="created"
              value={created && created.substring(0, 10)}
              id="edit-created"
              disabled
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-modified">Modified</label>

          <div className="col-md-4">
            <input
              name="modified"
              value={modified && modified.substring(0, 10)}
              id="edit-modified"
              disabled
              type="text"
              className="form-control input-rounded"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-experience">Experience</label>

          <div className="col-md-4">
            <input
              name="experience"
              value={experience}
              id="edit-experience"
              onChange={onChange}
              type="number"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-sm-2 col-form-label text-bold text-right" htmlFor="edit-experience">Roles</label>

          <div className="col-sm-4 roles">
            {
              roles && roles.length ? roles.map(i => {
                return <span>{`${i.name} `}&nbsp;</span>;
              }) : <span>No roles</span>
            }
          </div>
        </div>
      </fieldset>

      <fieldset className="edit-container__images">
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-image">Avatar</label>

          <div className="col-md-4 text-center">
            {
              imageLoading ? <Spinner /> : (
                image && image.url ? <img className="image" src={image.url} alt="image" /> : <div className="no-image">No image</div>
              )
            }

            <input
              name="image"
              value={image && image.url}
              id="edit-image"
              onChange={onChange}
              type="text"
              className="form-control input-rounded"
            />

            <input type="file" ref={fileInputImage} onChange={onUploadImage} />
          </div>


          <label className="col-md-2 col-form-label text-bold text-right">User options</label>

          <div className="col-md-4">
            <div className="form-check">
              <label className="edit-admin">
                <input
                  name="admin"
                  id="edit-admin"
                  className="form-check-input"
                  type="checkbox"
                  checked={admin}
                  onChange={onChangeAdmin}
                />
                Admin rights
              </label>
            </div>

            <div className="form-check">
                <label className="edit-status">
                  <input
                    name="status"
                    id="edit-status"
                    className="form-check-input"
                    type="checkbox"
                    checked={status}
                    onChange={onChange}
                  />
                  Active status
                </label>
              </div>

            <div className="form-check">
              <label className="edit-emailVerified">
                <input
                  name="emailVerified"
                  id="edit-emailVerified"
                  className="form-check-input"
                  type="checkbox"
                  checked={emailVerified}
                  onChange={onChange}
                />
                Email verified
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  )
};

export default Users;
