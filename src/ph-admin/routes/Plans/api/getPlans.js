import axios from 'axios';

import { API_URL, subUrl } from './../../../api/apiUrl';
import token from './../../../api/getToken';

const headers = { Authorization: token };

const getPlans = () => {
  return axios.get(
    `${API_URL}/${subUrl}/plans`,
    { headers }
  );
}

export default getPlans;
