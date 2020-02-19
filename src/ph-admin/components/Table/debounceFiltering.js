import React from 'react';
import { Input } from 'debounce-input-decorator';

const customFiltering = (filter, onChange) => {
  return (
    <Input
      style={{ width: '100%' }}
      value={filter ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
      debounceTimeout={800}
    />
  );
}

export default customFiltering;
