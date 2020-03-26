import React, { useState } from 'react';
import { Alert } from "reactstrap";

const Alerts = ({ type, id, name, surname, errorText, errorAlertIsOpen, closeErrorAlert }) => {
  const Name = surname ? `${name} ${surname}` : `${name}`;

  return (
    <>
      {
        // add //
        type === 'add' && <Alert color="success">New item has been added</Alert> ||

        // edit //
        type === 'edit' && (
          <Alert color="warning">
            {`"${id}`} - <b>{Name} has been edited</b>
          </Alert>
        ) ||

        // delete //
        type === 'delete' && (
          <Alert color="danger">
            {`"${id}`} - <b>{Name} has been deleted</b>
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
