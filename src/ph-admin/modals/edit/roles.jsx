import React from 'react';

const Roles = ({ name, slug, weight, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-name">Role</label>
        <div className="col-md-4">
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

        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-slug">Slug</label>
        <div className="col-md-4">
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
      </div>
    </fieldset>

    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-weight">Weight</label>
          <div className="col-md-4">
            <input
              name="weight"
              type="number"
              value={weight}
              id="edit-weight"
              onChange={onChange}
              className="form-control input-rounded"
            />
          </div>
      </div>
    </fieldset>
  </>
);

export default Roles;
