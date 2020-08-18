import React from 'react';
import AddModal from '../../components/Modals/Add/AddModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const AddPage = ({
  // fields
  name, domain, step,

  // UI
  isOpen, closeModal, onChange, onSubmit, modalLoading
}) => {

  return (
    <AddModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container add-container">
        <h4 className="add-container__title">Add page</h4>

        <span className="ion-close-round add-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-8">
                    <label htmlFor="add-name">Page title</label>

                    <input
                      name="name"
                      value={name}
                      id="add-name"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="add-step">Incremental step</label>

                    <input
                      name="step"
                      value={step}
                      id="add-step"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />
                  </div>

                </div>
              </fieldset>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="add-domain">Domain</label>

                    <input
                      name="domain"
                      value={domain}
                      id="add-domain"
                      onChange={onChange}
                      type="text"
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

export default AddPage;
