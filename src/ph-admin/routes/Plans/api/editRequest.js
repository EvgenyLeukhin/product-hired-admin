import axios from 'axios';

import { API_URL, subUrl } from './../../../api/apiUrl';
import token from './../../../api/getToken';

const headers = { Authorization: token };


const editRequest = (id, name, price) => {
  const path = `${API_URL}/${subUrl}/plans/${id}`;

  return axios.patch(
    path,
    { name, price },
    { headers }
  );
}

export default editRequest;
