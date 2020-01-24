import React from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import { API_URL, subUrl } from './../api/apiUrl';

import token from './../api/getToken';

class Select extends React.Component {
  state = {
    value: ''
  };

  // loadOptions = search => {
  //   const { action, filters } = this.props;
  //   return action({ search, ...filters }).then(res => {
  //     return res.results;
  //   });
  // };

  loadOptions = inputValue => {
    return axios.get(
      `${API_URL}/${subUrl}/locations`,
      {
        params: {
          'filter': {
            'where': { 'like': `%${inputValue}%` }
          }
        },
        headers: { Authorization: token }
      }
      ).then(res => res.data)
  }

  handleInputChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={this.loadOptions}
        getOptionValue={o => o.id}
        getOptionLabel={o => o.name}
        onChange={this.handleInputChange}
      />
    );
  }
}



// const getLocations = () => {
//   return axios.get(
//     `${API_URL}/${subUrl}/locations`,
//     { params: {}, headers: { Authorization: token } }
//   ).then(res => {
//     console.log(res.data);
//     return res.data;
//   })
// }


// class Select extends React.Component {

//   state = {
//     value: ''
//   }

//   onChange = value => {
//     this.setState({ value
// })
//   }

//   render() {
//     return (
//       <fieldset>
//         <h1>AsyncSelect (react-select)</h1>

//         <div className="form-group row">
//           <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-location">Locations</label>

//           <div className="col-md-4">
//             <AsyncSelect
//               isMulti
//               id="edit-location"
//               name="location"
//               menuPlacement="auto"
//               cacheOptions
//               defaultOptions
//               loadOptions={getLocations}
//               onChange={this.onChange}
//             />
//           </div>
//         </div>
//       </fieldset>
//     );
//   }
// }

export default withHeaderTitle(Select);


