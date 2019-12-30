import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';

const logOut = () => {
  return axios.post(
    `${API_URL}/users/logout`, {},
    {
      headers: { Authorization: token }
    }
  ).then(() => {
    // remove token
    localStorage.removeItem('ph-admin-user-data');

    // TODO
  }).catch((error) => {
    console.log(error);
    localStorage.removeItem('ph-admin-user-data');
  })
};

export default logOut;
