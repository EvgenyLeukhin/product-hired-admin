import React from 'react';

const Plans = ({ name, price, onChange }) => (
  <fieldset>
    <div className="form-group row">
      <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-name">Plan</label>
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

      <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-price">Price</label>
      <div className="col-md-4">
        <input
          required
          name="price"
          type="number"
          value={price}
          id="edit-price"
          onChange={onChange}
          className="form-control input-rounded"
        />
      </div>
    </div>
  </fieldset>
);

export default Plans;
