import React from "react";
import ReactModal from 'react-modal';

import './styles.scss';

const DeleteModal = props => {
  const { isOpen, modalLoading, closeModal } = props;

  return (
    <ReactModal
      {...props}
      ariaHideApp={false}
      isOpen={isOpen}
      overlayClassName="ReactModal__Overlay"
      className={`ReactModal ReactModal__delete`}
      portalClassName={'ReactModal__Portal__delete'}
      onRequestClose={modalLoading ? false : closeModal}
    >
      {props.children}
    </ReactModal>
  )
}

export default DeleteModal;
