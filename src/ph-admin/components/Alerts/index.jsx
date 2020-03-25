import React from 'react';
import { Alert } from 'reactstrap';

const Alerts = ({ type, name, errorText, errorAlertIsOpen, closeErrorAlert }) => {
  return (
    <>
      {
        // add //
        type === 'add' && <Alert color="success">New item has been added</Alert> ||

        // edit //
        type === 'edit' && (
          <Alert color="warning">
            <b>{name} has been edited</b>
          </Alert>
        ) ||

        // delete //
        type === 'delete' && (
          <Alert color="danger">
            <b>{name} has been deleted</b>
          </Alert>
        ) ||

        // error //
        type === 'error' && (
          <Alert color="danger" isOpen={errorAlertIsOpen} toggle={closeErrorAlert}>{errorText}</Alert>
        ) ||

        // copy //
        type === 'copy' && <Alert color="warning">Copied</Alert>
      }
    </>
  )
}

export default Alerts;
