import React from 'react';
import AsyncSelect from 'react-select/async';

import getLocations from './../api/getLocations';

class Location extends React.Component {

  // inputValue - what we are typing in select field
  loadOptions = inputValue => {
    return getLocations(inputValue).then(res => res.data);
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <AsyncSelect
        menuPlacement="auto"
        cacheOptions={true}
        defaultOptions={true}

        // load options request (always when onChange something)
        loadOptions={this.loadOptions}

        // get options id from loadOptions ??? TODO, doesn't affects
        getOptionValue={o => o.id}

        // get option text from loadOptions
        getOptionLabel={o => o.name}

        // onChange transfer to props
        value={value}
        onChange={onChange}
      />
    );
  }
}



class Locations extends React.Component {
  loadOptions = inputValue => {
    return getLocations(inputValue).then(res => res.data);
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <AsyncSelect
        isMulti={true}
        value={value}
        menuPlacement="auto"
        cacheOptions={true}
        defaultOptions={true}
        loadOptions={this.loadOptions}
        getOptionValue={o => o.id}
        getOptionLabel={o => o.name}
        onChange={onChange}
      />
    );
  }
}

export { Location, Locations };


