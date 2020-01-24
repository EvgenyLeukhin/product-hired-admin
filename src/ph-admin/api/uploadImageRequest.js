import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { 'Content-Type': 'multipart/form-data', Authorization: token };


const uploadImageRequest = (formData, id) => {
  return axios.post(
    `${API_URL}/${subUrl}/users/${id}/uploadImage`, formData, { headers }
  );
}

export default uploadImageRequest;
