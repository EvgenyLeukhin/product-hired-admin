import React, { useState } from 'react';
import { Alert } from "reactstrap";

const Alerts = ({ type, itemOriginal, errorText }) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  // no-errors requests
  if (!errorText) {
    return (
      <>
        {
          // delete //
          type === 'delete' && (
            <Alert color="danger">
              {`"${itemOriginal.id}`} - <b>{`${itemOriginal.name}" is deleted`}</b>
            </Alert>
          ) ||

          // edit //
          type === 'edit' && (
            <Alert color="warning">
              {`"${itemOriginal.id}`} - <b>{`${itemOriginal.name}" is edited`}</b>
            </Alert>
          ) ||

          // add //
          type === 'add' && <Alert color="success">New item is added</Alert>
        }
      </>
    )

  // if we have an error from any request
  } else return <Alert color="danger" isOpen={visible} toggle={onDismiss}>{errorText}</Alert>
}

export default Alerts;
