import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addUsers = (name, surname, password, email) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/users`,

    { name, surname, password, email },

    {
      headers: { Authorization: token }
    }
  );
}

export default addUsers;
