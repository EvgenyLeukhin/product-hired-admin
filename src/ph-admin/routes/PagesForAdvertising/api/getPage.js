import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const getPage = id => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/pages-for-advertising/${id}`,
    {
      headers: { Authorization: token }
    }
  )
};

export default getPage;
