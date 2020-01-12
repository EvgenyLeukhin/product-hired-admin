import React from 'react';
import { Input } from "reactstrap";

const Common = ({ id, name, onChange }) => (
  <>
    <div>
      <label htmlFor="edit-id">Id</label>
      <Input
        id="edit-id"
        type="number"
        value={id}
        name="id"
        disabled
      />
    </div>

    <div>
      <label htmlFor="edit-name">Name</label>
      <Input
        id="edit-name"
        type="text"
        value={name}
        name="name"
        onChange={onChange}
      />
    </div>
  </>
);

export default Common;
