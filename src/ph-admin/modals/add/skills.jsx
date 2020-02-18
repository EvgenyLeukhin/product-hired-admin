import React from 'react';

const Skills = ({ name, weight, slug, markers, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <div className="col-md-5">
          <label htmlFor="edit-name">Name</label>

          <input
            required
            autoComplete="off"
            name="name"
            value={name}
            id="edit-name"
            onChange={onChange}
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="edit-slug">Slug</label>

          <input
            required
            autoComplete="off"
            name="slug"
            value={slug}
            id="edit-slug"
            onChange={onChange}
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="edit-weight">Weight</label>

          <input
            required
            autoComplete="off"
            name="weight"
            value={weight}
            id="edit-weight"
            onChange={onChange}
            type="number"
            className="form-control"
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="edit-aliases">Aliases</label>

          <textarea
            required
            autoComplete="off"
            name="markers"
            value={markers}
            id="edit-aliases"
            onChange={onChange}
            type="text"
            className="form-control"
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Skills;
