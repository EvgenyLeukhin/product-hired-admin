import React from 'react';
import AsyncSelect from 'react-select/async';

import AddModal from '../../components/Modals/Add/AddModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";

import getCompanies from './api/getCompanies';
import getUsers     from './api/getUsers';


const AddJob = ({
  name, company, user,  // fields
  isOpen, closeModal, onChange, onSubmit, modalLoading,

  onChangeCompany, onChangeUser
}) => {

  return (
    <AddModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container add-container">
        <h4 className="add-container__title">Add job</h4>

        <span className="ion-close-round add-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="add-name">Job title</label>

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
                    <label htmlFor="add-surname">Company</label>

                    <AsyncSelect
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getCompanies(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => o.name}
                      onChange={onChangeCompany}
                      value={company}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="add-password">User</label>

                    <AsyncSelect
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getUsers(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => (
                        <div>
                          <span>{`${o.name} ${o.surname} `}</span>
                          <span style={{ color: '#1976D2' }}>{o.email}</span>
                        </div>
                      )}
                      onChange={onChangeUser}
                      value={user}
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
                    <Button disabled={!name || !company.name || !user.name} outline color="primary" type="submit">Save</Button>
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

export default AddJob;
