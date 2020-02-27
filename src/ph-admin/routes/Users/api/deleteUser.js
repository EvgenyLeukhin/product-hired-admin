import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const deleteUser = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.delete(
    `${API_URL}/${subUrl}/users/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default deleteUser;
