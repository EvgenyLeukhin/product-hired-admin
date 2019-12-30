import React from 'react';
import { Input } from 'debounce-input-decorator';

const customFiltering = (filter, onChange) => {
  return (
    <Input
      value={filter ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
      debounceTimeout={800}
    />
  );
}

export default customFiltering;
