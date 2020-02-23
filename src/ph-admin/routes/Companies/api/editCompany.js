import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editCompany = (id, name, slug, markers, weight) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/companies/${id}`,
    {
      name,
      slug,
      markers,
      weight
    },
    {
      headers: { Authorization: token }
    }
  );
}

export default editCompany;
