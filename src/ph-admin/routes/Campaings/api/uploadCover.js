import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';


const uploadCover = formData => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/vacancies/cover`,

    formData,

    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    }
  );
}

export default uploadCover;
