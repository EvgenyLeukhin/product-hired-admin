import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const getUsers = inputValue => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/users`,
    {
      params: {
        'filter': {
          'where': {
            'or': [
              { 'name':    { 'like': `%${inputValue}%`} },
              { 'surname': { 'like': `%${inputValue}%`} },
              { 'email':   { 'like': `%${inputValue}%`} }
            ]
          },
          'limit': 10
        }
      },
      headers: { Authorization: token }
    }
  );
}

export default getUsers;
