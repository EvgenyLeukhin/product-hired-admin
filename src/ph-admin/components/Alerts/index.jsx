import React, { useState } from 'react';
import { Alert } from "reactstrap";

const Alerts = ({ type, original, errorText }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <>
      {
        // add //
        type === 'add' && <Alert color="success">New item is added</Alert> ||

        // edit //
        type === 'edit' && (
          <Alert color="warning">
            {`"${original.id}`} - <b>{`${original.name}" is edited`}</b>
          </Alert>
        ) ||

        // delete //
        type === 'delete' && (
          <Alert color="danger">
            {`"${original.id}`} - <b>{`${original.name}" is deleted`}</b>
          </Alert>
        ) ||

        // error //
        type === 'error' && (
          <Alert color="danger" isOpen={visible} toggle={onDismiss}>{errorText}</Alert>
        )
      }
    </>
  )
}

export default Alerts;
