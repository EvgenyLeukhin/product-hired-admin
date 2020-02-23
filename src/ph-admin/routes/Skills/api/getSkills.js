import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const getSkills = () => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/skills`,
    {
      params: {
        filter: { order: 'id DESC' }
      },
      headers: { Authorization: token } // backend doesn't check it
    }
  );
}

export default getSkills;
