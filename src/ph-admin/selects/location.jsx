import React from 'react';
import AsyncSelect from 'react-select/async';

import getLocations from './../api/getLocations';

class Locations extends React.Component {

  // inputValue - what we are typing in select field
  loadOptions = inputValue => {
    return getLocations(inputValue).then(res => res.data);
  }

  render() {
    return (
      <AsyncSelect
        isMulti={this.props.isMulti}
        value={this.props.value}
        menuPlacement="auto"
        cacheOptions={true}
        defaultOptions={true}
        defaultInputValue={this.props.defaultInputValue}

        // load options request (always when onChange something)
        loadOptions={this.loadOptions}

        // get options id from loadOptions
        getOptionValue={o => o.id}

        // get option text from loadOptions
        getOptionLabel={o => o.name}

        // onChange transfer to props
        onChange={this.props.onChange}
      />
    );
  }
}

export default Locations;


