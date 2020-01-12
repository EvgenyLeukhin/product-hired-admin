import React from 'react';
import { Input } from "reactstrap";

const Roles = ({ slug, weight, onChange }) => (
  <>
    <div>
      <label htmlFor="edit-slug">Slug</label>
      <Input
        id="edit-slug"
        type="text"
        value={slug}
        name="slug"
        onChange={onChange}
      />
    </div>

    <div>
      <label htmlFor="edit-weight">Weight</label>
      <Input
        id="edit-weight"
        type="number"
        value={weight}
        name="weight"
        onChange={onChange}
      />
    </div>
  </>
);

export default Roles;
