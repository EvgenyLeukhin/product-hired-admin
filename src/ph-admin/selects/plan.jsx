import React from 'react';
import Select from 'react-select';

const options = [
  { value: 1, label: 'Free' },
  { value: 2, label: 'Bronze' },
  { value: 3, label: 'Silver' },
  { value: 4, label: 'Gold' },
];

const Plan = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
    />
  );
}

export default Plan;
