import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const getRole = role_id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancy_roles/${role_id}`,
    {
      params: {
        'filter': { 'limit': 1 }
      },
      headers: { Authorization: token }
    }
  );
}

export default getRole;
