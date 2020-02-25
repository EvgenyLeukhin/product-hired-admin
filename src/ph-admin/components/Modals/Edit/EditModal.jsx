import React from "react";
import ReactModal from 'react-modal';

import './styles.scss';
import './logo-cover.scss';

const EditModal = props => {
  const { isOpen, modalLoading, closeModal } = props;

  return (
    <ReactModal
      {...props}
      ariaHideApp={false}
      isOpen={isOpen}
      overlayClassName="ReactModal__Overlay"
      className={`ReactModal ReactModal__edit`}
      portalClassName={'ReactModal__Portal__edit'}
      onRequestClose={modalLoading ? false : closeModal}
    >
      {props.children}
    </ReactModal>
  )
}

export default EditModal;
