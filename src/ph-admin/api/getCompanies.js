import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const getCompanies = inputValue => {
  return axios.get(
    `${API_URL}/${subUrl}/companies`,
    {
      params: {
        'filter': {
          'where': {
            'name': { 'like': `%${inputValue}%`}
          },
          'limit': 50
        }
      },
      headers
    }
  )
}

export default getCompanies;
