import React from 'react';
import Spinner from '../../../components/Spinner';

const Users = props => {
  const {
    password,
    surname,
    email,
    job_title,
    experience,
    emailVerified,
    status,
    roles,
    admin,
    image,
    imageLoading,
    fileInputImage,
    onUploadImage,
    onChange,
    onChangeAdmin
  } = props;

  // console.log('users.jsx: ', emailVerified);

  return (
    <>
      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-password">Password</label>

          <div className="col-md-10">
            <input
              name="password"
              value={password}
              id="edit-password"
              onChange={onChange}
              type="password"
              className="form-control input-rounded"
            />
          </div>
        </div>
      </fieldset>

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

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-experience">Roles ---</label>

          <div className="col-md-4 roles">
            {
              roles.length ? roles.map(i => {
                return <span>{`${i.name} `}&nbsp;</span>;
              }) : <span>No roles</span>
            }
          </div>
        </div>
      </fieldset>

      <fieldset className="edit-container__images">
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-image">Avatar ---</label>

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

          <div className="col-lg-4">
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
                Admin rights ---
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
                Email verified ---
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  )
};

export default Users;
