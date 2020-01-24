import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';
import userId from './getUserId';

const headers = { Authorization: token };

const getUserData = () => {
  return axios.get(`${API_URL}/${subUrl}/users/${userId}`, { headers })
    .then(res => res.data)
}

export default getUserData;
