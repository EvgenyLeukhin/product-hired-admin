import React from 'react';
import { Input } from "reactstrap";

const Plans = ({ price, onChange }) => (
  <div>
    <label htmlFor="edit-price">Price</label>
    <Input
      id="edit-price"
      type="number"
      value={price}
      name="price"
      onChange={onChange}
    />
  </div>
);

export default Plans;
