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

const getCompany = inputValue => {
  return axios.get(
    `${API_URL}/${subUrl}/companies`,
    {
      params: {
        'filter': {
          'where': {
            'id': { 'like': `${inputValue}`}
          },
          'limit': 1
        }
      },
      headers
    }
  )
}

export { getCompanies, getCompany };
