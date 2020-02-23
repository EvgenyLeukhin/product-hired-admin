import axios from 'axios';

import { API_URL, subUrl } from './../../../api/apiUrl';

const getPlans = () => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/plans`,
    {
      headers: { Authorization: token } // backend doesn't check it
    }
  );
}

export default getPlans;
