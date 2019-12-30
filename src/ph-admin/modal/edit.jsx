import React from 'react';

import './scss/edit.scss';

const EditModal = ({ itemOriginal }) => {
  return (
    <>
      <h3>Edit - {`${itemOriginal.name} - ${itemOriginal.id}`} - TODO</h3>
    </>
  );
}

export default EditModal;
