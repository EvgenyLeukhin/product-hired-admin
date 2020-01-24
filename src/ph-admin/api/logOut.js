import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const logOut = () => {
  return axios.post(`${API_URL}/${subUrl}/users/logout`, {}, { headers })
    .then(() => {
      // remove token
      localStorage.removeItem('ph-admin-user-data');

    // TODO
    }).catch(error => {
      console.log(error);
      localStorage.removeItem('ph-admin-user-data');
    })
};

export default logOut;
