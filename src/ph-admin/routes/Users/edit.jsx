import React from 'react';
import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const EditUser = ({
  // fields
  original, name, surname, email, job_title, emailVerified, admin, status, experience, image, location, skills,

  isOpen, closeModal, onChange, onSubmit, modalLoading, deleteClick
}) => {

  console.log(original); // original
  return (
    <EditModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container edit-container">
        <h4 className="edit-container__title">
          Edit&nbsp;<b>{`"${original.id} - ${original.name} ${original.surname}"`}</b>
        </h4>

        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-6">
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


                  <div className="col-md-6">
                    <label htmlFor="edit-name">Surname</label>

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


                  <div className="col-md-6">
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


                  <div className="col-md-6">
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
