import React from 'react';
import { Input } from "reactstrap";

const Skills = ({ weight, slug, markers, onChange }) => (
  <>
    <div>
      <label htmlFor="edit-weight">Weight</label>
      <Input
        id="edit-weight"
        disabled
        type="number"
        value={weight}
        name="weight"
        onChange={onChange}
      />
    </div>

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
      <label htmlFor="edit-aliases">Aliases</label>
      <Input
        id="edit-aliases"
        type="text"
        value={markers}
        name="aliases"
        onChange={onChange}
      />
    </div>
  </>
);

export default Skills;
