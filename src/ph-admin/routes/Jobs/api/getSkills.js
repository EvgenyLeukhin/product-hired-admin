import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const getSkills = inputValue => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/skills`,
    {
      params: {
        'filter': {
          'where': {
            'markers': { 'like': `%${inputValue}%`}
          },
          'limit': 50
        }
      },
      headers: { Authorization: token }
    }
  );
}

export default getSkills;
