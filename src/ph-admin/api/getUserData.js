import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';
import userId from './getUserId';

const headers = { Authorization: token };

export const getAdminUserData = () => {
  return axios.get(`${API_URL}/${subUrl}/users/${userId}`, { headers })
    .then(res => res.data)
}

export const getUserData = userId => {
  return axios.get(`${API_URL}/${subUrl}/users/${userId}`, { headers })
    .then(res => res.data)
}
