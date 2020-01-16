import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const deleteRequest = (dataPath, id) => {
  return axios.delete(
    `${API_URL}/${subUrl}/${dataPath}/${id}`,
    {
      headers: { Authorization: token }
    })
};

export default deleteRequest;
