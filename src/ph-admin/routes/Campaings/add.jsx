import React from 'react';
import AsyncSelect from 'react-select/async';

import isEmpty from 'lodash/isEmpty';

import AddModal from '../../components/Modals/Add/AddModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";

import getCompanies from './api/getCompanies';
import getUsers     from './api/getUsers';


const AddCampaing = ({
  // fields
  name, user, url, weight, companies,

  // UI
  isOpen, closeModal, onChange, onSubmit, modalLoading,

  // actions
  onChangeCompanies, onChangeUser, resetFields
}) => {
  const disabledCondition = !name || !url || !weight || !user.name || isEmpty(companies);

  return (
    <AddModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container add-container">
        <h4 className="add-container__title">Add campaing</h4>

        <span className="ion-close-round add-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-7">
                    <label htmlFor="add-name">Campaing title</label>

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

                  <div className="col-md-5">
                    <label htmlFor="add-owner">Campaing owner</label>

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

                  <div className="col-md-7">
                    <label htmlFor="add-url">Campaing URL</label>

                    <input
                      required
                      autoComplete="off"
                      name="url"
                      value={url}
                      id="add-url"
                      onChange={onChange}
                      type="url"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="add-weight">Campaing weight</label>

                    <input
                      required
                      autoComplete="off"
                      name="weight"
                      value={weight}
                      id="add-weight"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="add-companies">Companies</label>

                    <AsyncSelect
                      isMulti
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getCompanies(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => o.name}
                      onChange={onChangeCompanies}
                      value={companies}
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
                    <Button color="secondary" onClick={resetFields} style={{ marginRight: 15 }}>Reset</Button>
                    <Button outline color="secondary" onClick={closeModal} style={{ marginLeft: 'auto' }}>Cancel</Button>
                    <Button disabled={disabledCondition} outline color="primary" type="submit">Save</Button>
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

export default AddCampaing;
