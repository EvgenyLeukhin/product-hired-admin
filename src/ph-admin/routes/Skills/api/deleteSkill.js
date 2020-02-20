import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const deleteSkill = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.delete(
    `${API_URL}/${subUrl}/skills/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default deleteSkill;
