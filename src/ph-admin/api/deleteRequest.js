import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const deleteRequest = (dataPath, id) => {
  const path = `${API_URL}/${subUrl}/${dataPath}/${id}`;
  return axios.delete(path, { headers })
};

export default deleteRequest;
