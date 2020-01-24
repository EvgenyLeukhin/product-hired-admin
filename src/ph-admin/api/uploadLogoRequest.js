import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { 'Content-Type': 'multipart/form-data', Authorization: token };

const uploadLogoRequest = formData => {
  return axios.post(
    `${API_URL}/${subUrl}/vacancies/logo`, formData, { headers }
  );
}

export default uploadLogoRequest;
