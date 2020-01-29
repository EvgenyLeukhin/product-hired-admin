import React from 'react';
import AsyncSelect from 'react-select/async';

import getCompanies from '../api/getCompanies';

class Company extends React.Component {
  loadOptions = inputValue => {
    return getCompanies(inputValue).then(res => res.data);
  }

  render() {
    return (
      <AsyncSelect
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

export default Company;
