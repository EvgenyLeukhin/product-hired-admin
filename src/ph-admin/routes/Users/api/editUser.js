import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editUser = (id, name, surname, email, job_title, emailVerified, admin, status, experience, image, location, skills) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.patch(
    `${API_URL}/${subUrl}/users/${id}`,

    { name, surname, email, job_title, emailVerified, admin, status, experience, image, location, skills },

    {
      headers: { Authorization: token }
    }
  );
}

export default editUser;

