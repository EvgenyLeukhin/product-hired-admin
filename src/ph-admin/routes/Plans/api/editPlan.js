import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editPlan = (id, name, price) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/plans/${id}`,
    {
      name,
      price
    },
    {
      headers: { Authorization: token }
    }
  );
}

export default editPlan;
