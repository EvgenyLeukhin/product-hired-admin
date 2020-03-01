import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addUsers = inputValue => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/locations`,
    {
      params: {
        'filter': {
          // 'where': {
          //   'name': { 'like': `%${inputValue}%`}
          // },
          'where': {
            'or': [
              { 'name':  { 'like': `%${inputValue}%`} },
              { 'country': { 'like': `%${inputValue}%`} }
            ]
          },
          'limit': 50
        }
      },
      headers: { Authorization: token }
    }
  );
}

export default addUsers;
