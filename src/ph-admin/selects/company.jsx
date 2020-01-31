import React from 'react';
import AsyncSelect from 'react-select/async';

import getCompanies from '../api/getCompanies';

class Company extends React.Component {
  loadOptions = inputValue => {
    return getCompanies(inputValue).then(res => res.data);
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <AsyncSelect
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

export default Company;
