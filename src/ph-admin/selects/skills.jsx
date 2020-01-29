import React from 'react';
import AsyncSelect from 'react-select/async';

import getSkills from './../api/getSkills';

class Skills extends React.Component {
  loadOptions = inputValue => {
    return getSkills(inputValue).then(res => res.data);
  }

  render() {
    return (
      <AsyncSelect
        isMulti={true}
        menuPlacement="auto"
        cacheOptions={true}
        defaultOptions={true}
        loadOptions={this.loadOptions}
        getOptionValue={o => o.id}
        getOptionLabel={o => o.name}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

export default Skills;


