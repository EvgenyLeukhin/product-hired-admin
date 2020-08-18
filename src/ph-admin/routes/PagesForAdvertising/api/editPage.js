import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editPage = (id, name, domain) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/pages-for-advertising/${id}`,

    { name, domain },

    {
      headers: { Authorization: token }
    }
  );
}

export default editPage;
