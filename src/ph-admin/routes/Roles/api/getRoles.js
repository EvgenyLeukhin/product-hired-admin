import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';

const getRoles = () => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/vacancy_roles`,
    {
      headers: { Authorization: token } // backend doesn't check it
    }
  );
}

export default getRoles;
