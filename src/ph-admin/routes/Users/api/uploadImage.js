import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';


const uploadLogo = (formData, id) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/users/${id}/uploadImage`,

    formData,

    {
      headers: { Authorization: token }
    }
  );
}

export default uploadLogo;
