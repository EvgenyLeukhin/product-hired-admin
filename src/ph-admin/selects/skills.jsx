import React from 'react';
import AsyncSelect from 'react-select/async';

import getSkills from './../api/getSkills';

class Skills extends React.Component {
  loadOptions = inputValue => {
    return getSkills(inputValue).then(res => res.data);
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <AsyncSelect
        isMulti={true}
        menuPlacement="auto"
        cacheOptions={true}
        defaultOptions={true}
        loadOptions={this.loadOptions}
        getOptionValue={o => o.id}
        getOptionLabel={o => o.name}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export default Skills;


