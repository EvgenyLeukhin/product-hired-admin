import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addUsers = location_id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/locations/${location_id}`,
    {
      params: {
        'filter': { 'limit': 1 }
      },
      headers: { Authorization: token }
    }
  );
}

export default addUsers;
