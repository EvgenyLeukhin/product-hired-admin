import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const getJobApplied = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancies/${id}/applied-jobs`,
    {
      headers: { Authorization: token }
    }
  )
};

export default getJobApplied;
