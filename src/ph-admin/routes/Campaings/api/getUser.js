import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const getUser = employer_id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/users/${employer_id}`,
    {
      params: {
        'filter': { 'limit': 1 }
      },
      headers: { Authorization: token }
    }
  );
}

export default getUser;
