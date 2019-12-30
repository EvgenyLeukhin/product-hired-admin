import axios from 'axios';

import API_URL from './apiUrl';

const logIn = (email, password) => {
  // login request
  return axios.post(`${API_URL}/users/login?include=user`, { email, password })
    .then(res => res.data)
}

export default logIn;
