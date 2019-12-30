import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';
import userId from './getUserId';

const getUserData = () => {
  // get userData
  return axios.get(`${API_URL}/users/${userId}`, {
    headers: { Authorization: token }
  })
    .then(res => res.data)

    // TODO
    .catch(error => console.log(error));
}

export default getUserData;
