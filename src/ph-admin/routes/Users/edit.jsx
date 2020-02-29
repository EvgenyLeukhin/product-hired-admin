import React from 'react';
import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";

import './edit.scss';


const EditUser = ({
  // fields
  original, name, surname, email, job_title, emailVerified, admin, status, experience, location, skills, created, modified,

  // image
  image, imageLoading, fileInputImage, onUploadImage, deleteImage, onChangeImage,

  isOpen, closeModal, onChange, onSubmit, modalLoading, deleteClick
}) => {

  console.log(original); // original
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
                          image.url ? <img className="image" src={`${image.url}`} alt="image" /> : <div className="no-image">No image</div>
                        )
                      }
                      <input
                        id="edit-image"
                        type="file"
                        className="input-file-custom"
                        ref={fileInputImage}
                        onChange={onUploadImage}
                      />
                      <label htmlFor="edit-image" className="input-file-label  btn btn-dark">
                        <i className="ion-image" />&nbsp;
                        <span>Choose a file</span>
                      </label>
                    </div>

                    <div className="edit-image-url" hidden={true}>
                      <label htmlFor="edit-image-url">Image URL</label>

                      <div className="input-group">
                        <input
                          name="image"
                          value={image.url}
                          id="edit-image-url"
                          onChange={onChangeImage}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste image URL or load file"
                        />

                        <div className="input-group-append">
                          <button className="btn btn-dark" type="button" onClick={deleteImage} disabled={!image.url}>Clear</button>
                        </div>
                      </div>
                    </div>

                    <div className="created">
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

                    <div className="modified">
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


                      <div className="col-md-4">
                        <label htmlFor="edit-name">Location</label>
                      </div>



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

                      <div className="col-md-12">
                        <label htmlFor="edit-email">Skills</label>
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="edit-email">Current company</label>
                      </div>


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


                      <div className="col-md-4">
                        <label htmlFor="edit-email">Product role</label>
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="edit-email">Seniority</label>
                      </div>

                      <div className="col-md-2">
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

                      <div className="col-md-6">
                        <label htmlFor="edit-email">Main reason for using ProductHired</label>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="edit-email">Notifications</label>
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
