import React from 'react';

const Plans = ({ price, onChange }) => (
  <fieldset>
    <div className="form-group row">
      <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-price">Price</label>

      <div className="col-md-4">
        <input
          name="price"
          value={price}
          id="edit-price"
          onChange={onChange}
          type="number"
          className="form-control input-rounded"
        />
      </div>
    </div>
  </fieldset>
);

export default Plans;
