import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { 'Content-Type': 'multipart/form-data', Authorization: token };

const uploadCoverRequest = formData => {
  return axios.post(
    `${API_URL}/${subUrl}/vacancies/cover`, formData, { headers }
  );
}

export default uploadCoverRequest;
