import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const deleteCompany = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.delete(
    `${API_URL}/${subUrl}/companies/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default deleteCompany;
