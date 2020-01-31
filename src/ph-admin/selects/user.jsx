import React from 'react';
import AsyncSelect from 'react-select/async';

import { getUsers } from './../api/getUsers';

class User extends React.Component {
  loadOptions = inputValue => {
    return getUsers(inputValue).then(res => res.data);
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
        getOptionLabel={o => `${o.name} ${o.surname}`}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export default User;
