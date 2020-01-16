import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';
import userId from './getUserId';

const getUserData = () => {
  // get userData
  return axios.get(`${API_URL}/${subUrl}/users/${userId}`, {
    headers: { Authorization: token }
  })
    .then(res => res.data)
}

export default getUserData;
