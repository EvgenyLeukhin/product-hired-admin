import React from 'react';
import DeleteModal from '../../components/Modals/Delete/DeleteModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";

// TODO delete 'some PH page' substring
const DeletePage = ({ isOpen, modalLoading, closeModal, id, name, deleteSubmit }) => (
  <DeleteModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
    <section className="section-container  delete-container">
      <span className="ion-close-round ReactModal__delete__close" onClick={closeModal} />

      <div className='ReactModal__delete__title'>
        <span>Are you sure you want to delete </span> <br/>
        <span>{id} - <b>{`${name} some PH page`}</b>?</span>
      </div>

      {
        modalLoading ? (
          <div className="ReactModal__delete__is-loading">
            <Spinner />
          </div>
        ) : (
          <footer className="ReactModal__delete__buttons">
            <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
            <Button outline color="danger" onClick={deleteSubmit}>Delete</Button>
          </footer>
        )
      }
    </section>
  </DeleteModal>
);


export default DeletePage;
