import React from 'react';

const Common = ({ id, name, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-id">Id</label>

        <div className="col-md-2">
          <input
            name="id"
            disabled
            value={id}
            id="edit-id"
            onChange={onChange}
            type="number"
            className="form-control input-rounded"
          />
        </div>

        <label className="col-md-4 col-form-label text-bold text-right" htmlFor="edit-name">Name</label>

        <div className="col-md-4">
          <input
            name="name"
            value={name}
            id="edit-name"
            onChange={onChange}
            type="text"
            className="form-control input-rounded"
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Common;
