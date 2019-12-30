import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';

const deleteRequest = (dataPath, id) => {
  return axios.delete(
    `${API_URL}/${dataPath}/${id}`,
    {
      headers: { Authorization: token }
    })
};

export default deleteRequest;
