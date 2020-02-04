import React from 'react';
import Select from 'react-select';

import { statusValues } from '../consts';

const Status = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    options={statusValues}
  />
);

export default Status;
