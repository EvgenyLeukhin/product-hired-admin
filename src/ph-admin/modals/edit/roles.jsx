import React from 'react';

const Roles = ({ name, slug, weight, keywords, negative, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <div className="col-md-5">
          <label htmlFor="edit-name">Role</label>

          <input
            required
            name="name"
            type="text"
            value={name}
            id="edit-name"
            onChange={onChange}
            className="form-control input-rounded"
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="edit-slug">Slug</label>

          <input
            required
            name="slug"
            type="text"
            value={slug}
            id="edit-slug"
            onChange={onChange}
            className="form-control input-rounded"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="edit-weight">Weight</label>

          <input
            name="weight"
            type="number"
            value={weight}
            id="edit-weight"
            onChange={onChange}
            className="form-control input-rounded"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="edit-keywords">Search Phrases, comma-separated</label>

          <textarea
            type="text"
            name="keywords"
            value={keywords}
            id="edit-keywords"
            onChange={onChange}
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="edit-negative">Stop-Words, comma-separated</label>

          <textarea
            type="text"
            name="negative"
            value={negative}
            id="edit-negative"
            onChange={onChange}
            className="form-control"
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Roles;
