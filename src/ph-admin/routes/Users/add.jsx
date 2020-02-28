import React from 'react';
import AddModal from '../../components/Modals/Add/AddModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const AddUser = ({
  name, surname, password, email, // fields
  isOpen, closeModal, onChange, onSubmit, modalLoading
}) => {

  return (
    <AddModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container add-container">
        <h4 className="add-container__title">Add user</h4>

        <span className="ion-close-round add-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="add-name">Name</label>

                    <input
                      required
                      autoComplete="off"
                      name="name"
                      value={name}
                      id="add-name"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="add-surname">Surname</label>

                    <input
                      required
                      autoComplete="off"
                      name="surname"
                      value={surname}
                      id="add-surname"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="add-password">Password</label>

                    <input
                      required
                      autoComplete="off"
                      name="password"
                      value={password}
                      id="add-password"
                      onChange={onChange}
                      type="password"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="add-email">Email</label>

                    <input
                      required
                      autoComplete="off"
                      name="email"
                      value={email}
                      id="add-email"
                      onChange={onChange}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </fieldset>

              {
                modalLoading ? (
                  <div className="add-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="add-container__buttons">
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button disabled={!name} outline color="primary" type="submit">Save</Button>
                  </footer>
                )
              }
            </form>
          </div>
        </div>
      </section>
    </AddModal>
  );
}

export default AddUser;
