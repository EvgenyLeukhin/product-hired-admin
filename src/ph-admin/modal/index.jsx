import React from "react";
import ReactModal from 'react-modal';

import EditModal from './edit';
import DeleteModal from './delete';
import AddModal from './add';

import './scss/common.scss';

const Modal = ({ type, modalIsOpen, closeModal, itemOriginal, deleteRequest, modalLoading, wrapperClassname }) => {
  return (
    <>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        overlayClassName="ReactModal__Overlay"
        className={`ReactModal ReactModal__${type}`}
        onRequestClose={modalLoading ? false : closeModal}
      >
        {
          // delete
          type === 'delete' && (
            <DeleteModal
              closeModal={closeModal}
              itemOriginal={itemOriginal}
              deleteRequest={deleteRequest}
              modalLoading={modalLoading}
            />
          ) ||

          // edit
          type === 'edit' && (
            <EditModal
              closeModal={closeModal}
              itemOriginal={itemOriginal}
              modalLoading={modalLoading}
              wrapperClassname={wrapperClassname}
            />
          ) ||

          // add
          type === 'add' && (
            <AddModal
              closeModal={closeModal}
              itemOriginal={itemOriginal}
              deleteRequest={deleteRequest}
              modalLoading={modalLoading}
            />
          )
        }
      </ReactModal>
    </>
  );
};

export default Modal;
