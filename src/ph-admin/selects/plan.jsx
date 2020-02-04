import React from 'react';
import Select from 'react-select';

import { planValues } from '../consts';

const Plan = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    options={planValues}
  />
);

export default Plan;
