import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const getSkills = inputValue => {
  return axios.get(
    `${API_URL}/${subUrl}/skills`,
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

export default getSkills;
