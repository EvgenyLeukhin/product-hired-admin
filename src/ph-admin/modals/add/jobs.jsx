import React from 'react';

const Jobs = ({ name, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-title">Job title</label>
        <div className="col-md-4">
          <input
            required
            autoComplete="off"
            name="name"
            value={name}
            id="edit-title"
            onChange={onChange}
            type="text"
            className="form-control input-rounded"
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Jobs;
