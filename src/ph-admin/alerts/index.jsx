import React from 'react';
import { Alert } from "reactstrap";

const Alerts = ({ type, itemOriginal }) => {
  return (
    <>
      {
        // delete
        type === 'delete' && (
          <Alert color="danger">
            {`"${itemOriginal.id}`} - <b>{`${itemOriginal.name}" is deleted`}</b>
          </Alert>
        ) ||

        // edit
        type === 'edit' && (
          <Alert color="warning">
            {`"${itemOriginal.id}`} - <b>{`${itemOriginal.name}" is edited`}</b>
          </Alert>
        ) ||

        // add
        type === 'add' && (
          <Alert color="success">
            New item is added
          </Alert>
        ) ||

        // error
        type === 'error' && (
          <Alert color="danger">
            <b>Error</b>. Something is wrong!
          </Alert>
        )
      }
    </>
  )
}

export default Alerts;
