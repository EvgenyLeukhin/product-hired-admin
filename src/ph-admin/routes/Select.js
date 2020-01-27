import React from 'react';
import AsyncSelect from 'react-select/async';

import getLocations from './../api/getLocations';

class Select extends React.Component {

  // inputValue - what we are typing in select field
  loadOptions = inputValue => {
    return getLocations(inputValue)
      .then(res => res.data);
  }

  render() {
    return (
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions

        // load options request (always when onChange something)
        loadOptions={this.loadOptions}

        // get options id from loadOptions
        getOptionValue={o => o.id}

        // get option text from loadOptions
        getOptionLabel={o => o.name}
      />
    );
  }
}

export default Select;


