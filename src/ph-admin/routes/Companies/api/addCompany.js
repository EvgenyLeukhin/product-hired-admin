import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addCompany = (name, domain, slug, weight, logo, cover) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/companies`,

    { name, domain, slug, weight, logo, cover },

    {
      headers: { Authorization: token }
    }
  );
}

export default addCompany;
