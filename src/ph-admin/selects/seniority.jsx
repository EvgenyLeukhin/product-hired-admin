import React from 'react';
import Select from 'react-select';

import { seniorityValues } from '../consts';

const Seniority = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    options={seniorityValues}
  />
);

export default Seniority;
