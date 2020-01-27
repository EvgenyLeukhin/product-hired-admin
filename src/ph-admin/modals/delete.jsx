import React from 'react';
import { Button } from "reactstrap";

import Spinner from '../../components/Spinner';

import './scss/delete.scss';

const DeleteModal = ({ dataPath, itemOriginal, closeModal, deleteRequest, modalLoading }) => {
  const { id, name, surname } = itemOriginal;

  const title = () => {
    if (dataPath === 'users') {
      return <span>{id} - <b>{name} - {surname}</b>?</span>
    } else {
      return <span>{id} - <b>{name}</b>?</span>
    }
  }
  return (
    <>
      <div className='ReactModal__delete__title'>
        <span>Are you sure you want to delete </span> <br/>
        {title()}
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
