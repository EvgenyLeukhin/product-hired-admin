import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editCompany = (id, name, domain, slug, weight, logo, cover) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/companies/${id}`,

    { name, domain, slug, weight, logo, cover },

    {
      headers: { Authorization: token }
    }
  );
}

export default editCompany;
