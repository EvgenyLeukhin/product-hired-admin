import React from 'react';

const Plans = (onChange, price) => {
  return (
    <>
      <div>
        <label htmlFor="edit-price">Price</label>
        <input
          id="edit-price"
          type="number"
          value={price}
          name="price"
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Plans;
