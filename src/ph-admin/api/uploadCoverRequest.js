import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';

const uploadCoverRequest = formData => {
  return axios.post(`${API_URL}/vacancies/cover`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: token
    }
  });
}

export default uploadCoverRequest;
