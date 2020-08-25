import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const getVacancies = inputValue => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancy_roles`,
    {
      params: {
        'filter': {
          'where': {
            'name': { 'like': `%${inputValue}%`}
          },
          'limit': 10
        }
      },
      headers: { Authorization: token }
    }
  );
}

export default getVacancies;
