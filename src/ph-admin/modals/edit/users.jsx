import React from 'react';
import Spinner from '../../../components/Spinner';

import { Location } from '../../selects/location';
import Skills from '../../selects/skills';

const Users = props => {
  const {
    name,
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

  const locationId = location && `${location.alias_region} [${location.id} - ${location.country}]` || '';

  return (
    <fieldset>
      <div className="form-group row">
        <div className="col-md-3">
          <div className="form-group__row">
            <div className="col-md-12  edit-image">
              <label htmlFor="edit-image">Profile photo</label>

              {
                imageLoading ? <Spinner /> : (
                  image && image.url ? <img className="image" src={image.url} alt="image" /> : <div className="no-image">No image</div>
                )
              }

              <input
                id="edit-image"
                type="file"
                ref={fileInputImage}
                onChange={onUploadImage}
              />
            </div>


            <div className="col-md-12">
              <label htmlFor="edit-created">Created</label>

              <input
                disabled
                name="created"
                value={created && created.substring(0, 10)}
                id="edit-created"
                type="text"
                className="form-control"
              />
            </div>


            <div className="col-md-12">
              <label htmlFor="edit-modified">Modified</label>

              <input
                disabled
                name="modified"
                value={modified && modified.substring(0, 10)}
                id="edit-modified"
                type="text"
                className="form-control"
              />
            </div>

            <div className="col-md-12 roles-container">
              <span>Roles: </span>
              <span style={{ color: '#007bff' }}>
                {
                  roles && roles.length ? roles.map(i => {
                    return <span>{`${i.name} `}&nbsp;</span>;
                  }) : <span>no roles</span>
                }
              </span>
            </div>
          </div>
        </div>


        <div className="col-md-9">
          <div className="row form-group__row">
            {/* name */}
            <div className="col-md-4">
              <label htmlFor="edit-name">Name</label>

              <input
                required
                name="name"
                type="text"
                value={name}
                id="edit-name"
                onChange={onChange}
                className="form-control"
              />
            </div>
            {/* surname */}
            <div className="col-md-4">
              <label htmlFor="edit-surname">Surname</label>

              <input
                required
                type="text"
                name="surname"
                value={surname}
                id="edit-surname"
                onChange={onChange}
                className="form-control"
              />
            </div>
            {/* location */}
            <div className="col-md-4">
              <label htmlFor="edit-city">Location</label>

              <Location
                id="edit-city"
                value={location}
                onChange={location => onChangeLocation(location)}
              />
              <span style={{ fontWeight: 'normal', color: '#007bff', paddingLeft: 10 }}>{locationId}</span>
            </div>



            {/* email */}
            <div className="col-md-4">
              <label htmlFor="edit-email">Email</label>

              <input
                required
                name="email"
                type="email"
                value={email}
                id="edit-email"
                onChange={onChange}
                className="form-control"
              />
            </div>
            {/* email verified */}
            <div className="col-md-4">
              <label className="empty-label">&nbsp;</label>

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
            {/* active status */}
            <div className="col-md-4">
              <label className="empty-label">&nbsp;</label>

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
            </div>



            {/* skills */}
            <div className="col-md-12">
              <label htmlFor="edit-skills">Skills</label>

              <Skills
                value={skills}
                onChange={skills => onChangeSkills(skills)}
              />
            </div>



            {/* job title */}
            <div className="col-md-4">
              <label htmlFor="edit-job_title">Job title</label>

              <input
                required
                type="text"
                name="job_title"
                value={job_title}
                id="edit-job_title"
                onChange={onChange}
                className="form-control"
              />
            </div>
            {/* experience */}
            <div className="col-md-4">
              <label htmlFor="edit-experience">Experience</label>

              <input
                required
                name="experience"
                value={experience}
                id="edit-experience"
                onChange={onChange}
                type="number"
                className="form-control"
              />
            </div>

            {/* admin rights */}
            <div className="col-md-4">
              <label className="empty-label">&nbsp;</label>

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
            </div>

          </div>
        </div>

      </div>
    </fieldset>
  )
};

export default Users;
