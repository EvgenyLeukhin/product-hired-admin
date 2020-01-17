import React from "react";
import ReactModal from 'react-modal';

import EditModal from './edit';
import DeleteModal from './delete';
import AddModal from './add';

import './scss/common.scss';

const Modal = props => {
  const {
    type,
    text,
    dataPath,
    modalIsOpen,
    closeModal,
    itemOriginal,
    editRequest,
    deleteRequest,
    modalLoading,
  } = props;

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
              dataPath={dataPath}
              closeModal={closeModal}
              itemOriginal={itemOriginal}
              deleteRequest={deleteRequest}
              modalLoading={modalLoading}
            />
          ) ||

          // edit
          type === 'edit' && (
            <EditModal
              dataPath={dataPath}
              closeModal={closeModal}
              itemOriginal={itemOriginal}
              editRequest={editRequest}
              modalLoading={modalLoading}
            />
          ) ||

          // add
          type === 'add' && (
            <AddModal
              text={text}
              dataPath={dataPath}
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
