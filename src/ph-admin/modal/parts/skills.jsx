import React from 'react';

const Skills = ({ weight, slug, markers, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-weight">Weight</label>
        <div className="col-md-4">
          <input
            name="weight"
            value={weight}
            id="edit-weight"
            onChange={onChange}
            type="number"
            className="form-control input-rounded"
          />
        </div>

        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-slug">Slug</label>
        <div className="col-md-4">
          <input
            name="slug"
            value={slug}
            id="edit-slug"
            onChange={onChange}
            type="text"
            className="form-control input-rounded"
          />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-aliases">Aliases</label>

        <div className="col-md-4">
          <input
            name="aliases"
            value={markers}
            id="edit-aliases"
            onChange={onChange}
            type="text"
            className="form-control input-rounded"
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Skills;