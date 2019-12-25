import React from "react";
import ReactModal from 'react-modal';

import { Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import './modal.scss';

class Modal extends React.Component {
  render() {
    const { isOpen, closeModal, itemOriginal, deleteRequest, modalLoader } = this.props;

    const modalStyles = {
      content: {
        width: '320px',
        right: 'auto',
        bottom: 'auto',
        left: '50%',
        marginLeft: '-160px',
        borderRadius: '10px'
      },

      overlay: {
        backgroundColor: 'rgba(0,0,0, .5)',
        zIndex: '30'
      }
    }

    return (
      <ReactModal
        isOpen={isOpen}
        style={modalStyles}
        onRequestClose={modalLoader ? false : closeModal}
        ariaHideApp={false}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // contentLabel="Example Modal"
      >
        <div className='ReactModal__delete'>
          {
            itemOriginal && (
              <div className='ReactModal__delete__title'>
                <span>Are you sure you want to delete </span> <br/>
                {`"${itemOriginal.id}`} - <b>{`${itemOriginal.name}"?`}</b>
              </div>
            )
          }

          <div className='ReactModal__delete__buttons'>
            {
              !modalLoader ? (
                <>
                  <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                  <Button outline color="danger" onClick={deleteRequest}>Delete</Button>
                </>
              ) : <Spinner />
            }
          </div>

        </div>
      </ReactModal>
    );
  }
}

export default Modal;
