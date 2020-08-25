import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const getVacancy = vacancy_role => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancy_roles/${vacancy_role}`,
    {
      params: {
        'filter': { 'limit': 1 }
      },
      headers: { Authorization: token }
    }
  );
}

export default getVacancy;
