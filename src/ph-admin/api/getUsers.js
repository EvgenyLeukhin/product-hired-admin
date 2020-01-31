import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const getUsers = inputValue => {
  return axios.get(
    `${API_URL}/${subUrl}/users`,
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

export default getUsers;
