import React from 'react';
import Modal from '../../components/Modal';

import { Button } from "reactstrap";

const EditModal = ({ name, price, original, isOpen, closeModal, onChange, onSubmit }) => {
  return (
    <Modal isOpen={isOpen}>
      <section className="section-container edit-container">
        <h4 className="edit-container__title">
          Edit&nbsp;<b>{`"${original.id} - ${original.name}"`}</b>
        </h4>

        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>
              <fieldset>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="edit-price">Plan</label>

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


                  <div className="col-md-6">
                    <label htmlFor="edit-price">Price</label>

                    <input
                      required
                      name="price"
                      type="number"
                      value={price}
                      id="edit-price"
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </fieldset>

              <footer className="edit-container__buttons">
                <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                <Button outline color="primary" type="submit">Save</Button>
              </footer>
            </form>
          </div>
        </div>
      </section>
    </Modal>
  );
}

export default EditModal;
