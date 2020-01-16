import React from 'react';
import Spinner from '../../../components/Spinner';

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
    image,
    imageLoading,
    fileInputImage,
    onUploadImage,
    onChange
  } = props;

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
        </div>
      </fieldset>

      <fieldset className="edit-container__images">
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right">User options</label>

          <div className="col-lg-4">
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

            <div className="form-check">
              <label className="edit-admin-status">
                <input
                  name="admin-status"
                  id="edit-admin-status"
                  className="form-check-input"
                  type="checkbox"
                  checked={roles.length && roles[0].name === 'admin' ? true : false} // w/o mapping
                  disabled
                />
                Admin rights
              </label>
            </div>
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-image">Avatar</label>

          <div className="col-md-4 text-center">
            {
              imageLoading ? <Spinner /> : (
                image ? <img className="image" src={image} alt="image" /> : <divc className="no-image">No image</divc>
              )
            }

            <input
              name="image"
              value={image}
              id="edit-image"
              onChange={onChange}
              type="url"
              className="form-control input-rounded"
            />

            <input type="file" ref={fileInputImage} onChange={onUploadImage} />
          </div>
        </div>
      </fieldset>
    </>
  )
};

export default Users;
