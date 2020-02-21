import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addSkill = (name, slug, weight, markers) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/skills`,
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

export default addSkill;
