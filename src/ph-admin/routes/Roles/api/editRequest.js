import axios from 'axios';
import { API_URL, subUrl } from './../../../api/apiUrl';

const editRequest = (id, name, slug, weight, keywords, negative) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/vacancy_roles/${id}`,
    {
      name,
      slug,
      weight,
      keywords,
      negative
    },
    {
      headers: { Authorization: token }
    }
  );
}

export default editRequest;
