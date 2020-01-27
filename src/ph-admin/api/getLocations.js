import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const getLocations = inputValue => {
  return axios.get(
    `${API_URL}/${subUrl}/locations`,
    {
      params: {
        'filter': {
          'where': {
            'name': { 'like': `%${inputValue}%`}
          }
        }
      },
      headers
    }
  )
}

export default getLocations;
