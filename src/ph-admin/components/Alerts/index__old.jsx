import React, { useState } from 'react';
import { Alert } from "reactstrap";

const Alerts = ({ type, original, errorText, errorAlertIsOpen, closeErrorAlert }) => {
  const name = original.surname
    ? `${original.name} ${original.surname}`
    : `${original.name}`;

  return (
    <>
      {
        // add //
        type === 'add' && <Alert color="success">New item has been added</Alert> ||

        // edit //
        type === 'edit' && (
          <Alert color="warning">
            {`"${original.id}`} - <b>{name} has been edited</b>
          </Alert>
        ) ||

        // delete //
        type === 'delete' && (
          <Alert color="danger">
            {`"${original.id}`} - <b>{name} has been deleted</b>
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
