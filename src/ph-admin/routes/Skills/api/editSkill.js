import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editSkill = (id, name, slug, markers, weight) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/skills/${id}`,
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

export default editSkill;
