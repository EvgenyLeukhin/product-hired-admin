import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addPage = (name, domain, step) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/pages-for-advertising`,

    { name, domain, step },

    {
      headers: { Authorization: token }
    }
  );
}

export default addPage;
