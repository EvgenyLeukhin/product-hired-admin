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
            'or': [
              { 'name':  { 'like': `%${inputValue}%`} },
              { 'email': { 'like': `%${inputValue}%`} }
            ]
          },
          'limit': 50
        }
      },
      headers
    }
  )
}

const getCurrentUser = employer_id => {
  return axios.get(
    `${API_URL}/${subUrl}/users`,
    {
      params: {
        'filter': {
          'where': {
            'id': { 'like': `${employer_id}`}
          },
          'limit': 1
        }
      },
      headers
    }
  )
}

export { getUsers, getCurrentUser };
