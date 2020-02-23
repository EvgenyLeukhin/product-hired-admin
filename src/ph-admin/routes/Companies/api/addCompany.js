import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addCompany = (name, slug, weight, markers) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/companies`,
    {
      name,
      slug,
      weight,
      markers
    },
    {
      headers: { Authorization: token }
    }
  );
}

export default addCompany;
