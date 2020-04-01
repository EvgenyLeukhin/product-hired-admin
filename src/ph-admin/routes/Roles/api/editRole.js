import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editRole = (id, name, slug, weight, keywords, negative, skills) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/vacancy_roles/${id}`,
    {
      name,
      slug,
      weight,
      keywords,
      negative,
      skills
    },
    {
      headers: { Authorization: token }
    }
  );
}

export default editRole;
