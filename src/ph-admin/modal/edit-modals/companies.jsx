import React from 'react';
import { Input } from "reactstrap";

const Companies = ({ slug, domain, weight, onChange }) => (
  <>
    <div>
      <label htmlFor="edit-domain">Domain</label>
      <Input
        id="edit-domain"
        type="text"
        value={domain}
        name="domain"
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

export default Companies;
