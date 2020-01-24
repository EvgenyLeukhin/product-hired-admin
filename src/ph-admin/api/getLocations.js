import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const getLocations = () => {
  return axios.get(
    `${API_URL}/${subUrl}/locations`,
    {
      params: {

      },
      headers
    }
  );
}

export default getLocations;
