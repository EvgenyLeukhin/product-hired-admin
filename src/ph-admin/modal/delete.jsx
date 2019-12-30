import React from 'react';
import { Button } from "reactstrap";

import Spinner from '../../components/Spinner';

import './scss/delete.scss';

const DeleteModal = ({ itemOriginal, closeModal, deleteRequest, modalLoading }) => {
  return (
    <>
      <div className='ReactModal__delete__title'>
        <span>Are you sure you want to delete </span> <br/>
        {`"${itemOriginal.id}`} - <b>{`${itemOriginal.name}"?`}</b>
      </div>

      {
        modalLoading ? <Spinner /> : (
          <div className='ReactModal__delete__buttons'>
            <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
            <Button outline color="danger" onClick={deleteRequest}>Delete</Button>
          </div>
        )
      }
    </>
  );
}

export default DeleteModal;
