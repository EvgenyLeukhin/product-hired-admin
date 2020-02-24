import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';


const uploadLogo = formData => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/vacancies/logo`,

    formData,

    {
      headers: { Authorization: token }
    }
  );
}

export default uploadLogo;
