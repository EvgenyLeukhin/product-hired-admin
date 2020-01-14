import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';

const uploadLogoRequest = formData => {
  return axios.post(`${API_URL}/vacancies/logo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token
    }
  });
}

export default uploadLogoRequest;
