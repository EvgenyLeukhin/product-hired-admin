import React from 'react';

const Jobs = ({ name, onChange }) => (
  <fieldset>
    <div className="form-group row">
      <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-name">Job title</label>

      <div className="col-md-10">
        <input
          name="name"
          type="text"
          value={name}
          id="edit-name"
          onChange={onChange}
          className="form-control input-rounded"
        />
      </div>
    </div>
  </fieldset>
);

export default Jobs;
