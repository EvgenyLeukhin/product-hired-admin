import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editJob = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;
  const {
    id,
    name,

  } = state;

  return axios.patch(
    `${API_URL}/${subUrl}/vacancies/${id}`,

    {
      name,

      modified: `${new Date().toISOString()}`,
    },

    {
      headers: { Authorization: token }
    }
  );
}

export default editJob;
