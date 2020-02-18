import React from 'react';

const Plans = ({ name, price, onChange }) => (
  <fieldset>
    <div className="form-group row">
      <div className="col-md-6">
        <label htmlFor="edit-price">Plan</label>

        <input
          required
          name="name"
          type="text"
          value={name}
          id="edit-name"
          onChange={onChange}
          className="form-control"
        />
      </div>


      <div className="col-md-6">
        <label htmlFor="edit-price">Price</label>

        <input
          required
          name="price"
          type="number"
          value={price}
          id="edit-price"
          onChange={onChange}
          className="form-control"
        />
      </div>
    </div>
  </fieldset>
);

export default Plans;
