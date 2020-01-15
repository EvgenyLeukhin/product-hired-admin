import React from 'react';
import { Button } from "reactstrap";

import cln from 'classnames';


const AddButton = ({ text, loading, addClick }) => (
  <Button
    type="button"
    color="primary"
    onClick={addClick}
    className={cln('add-button', { 'is-loading': loading })}
  >
    Add {text}
  </Button>
);


export default AddButton;
