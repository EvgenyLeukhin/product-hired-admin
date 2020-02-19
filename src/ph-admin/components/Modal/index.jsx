import React from "react";
import ReactModal from 'react-modal';

import './styles.scss';

const Modal = props => {
  const { isOpen, closeModal } = props;

  return (
    <ReactModal
      {...props}
      ariaHideApp={false}
      isOpen={isOpen}
      overlayClassName="ReactModal__Overlay"
      className={`ReactModal ReactModal__edit`}
      // onRequestClose={modalLoading ? false : closeModal}
      onRequestClose={closeModal}
    >
      {props.children}
    </ReactModal>
  )
}

export default Modal;
