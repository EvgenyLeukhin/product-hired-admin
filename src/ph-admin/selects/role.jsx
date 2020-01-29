import React from 'react';
import AsyncSelect from 'react-select/async';

import getRoles from './../api/getRoles';

class Roles extends React.Component {

  // inputValue - what we are typing in select field
  loadOptions = inputValue => {
    return getRoles(inputValue).then(res => res.data);
  }

  render() {
    return (
      <AsyncSelect
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

        // value in props
        value={this.props.value}
      />
    );
  }
}

export default Roles;
