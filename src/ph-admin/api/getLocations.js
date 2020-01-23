import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const getLocations = () => {
  return axios.get(
    `${API_URL}/${subUrl}/locations`,
    {
      params: {

      },
      headers: {
        Authorization: token
      }
    }
  );
}

export default getLocations;
