import React from 'react';

const Skills = ({ name, weight, slug, markers, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <div className="col-md-5">
          <label htmlFor="edit-name">Skill</label>

          <input
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

        <div className="col-md-12">
          <label htmlFor="edit-aliases">Aliases</label>

          <textarea
            type="text"
            name="markers"
            value={markers}
            id="edit-aliases"
            onChange={onChange}
            className="form-control"
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Skills;
