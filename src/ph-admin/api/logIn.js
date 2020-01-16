import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';

const logIn = (email, password) => {
  // login request
  return axios.post(`${API_URL}/${subUrl}/users/login?include=user`, { email, password })
    .then(res => res.data)
}

export default logIn;
