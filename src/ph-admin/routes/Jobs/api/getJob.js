import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const getJob = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancies/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default getJob;
