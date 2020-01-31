import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'public', label: 'Public' },
  { value: 'draft', label: 'Draft' },
  { value: 'expired', label: 'Expired' }
];

const Status = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
    />
  );
}

export default Status;
