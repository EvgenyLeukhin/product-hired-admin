import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';

const logOut = () => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/users/logout`,
    {

    },
    {
      headers: { Authorization: token }
    }
  )
    .then(() => {
      // remove token
      localStorage.removeItem('ph-admin-user-data');

    }).catch(error => {
      // remove token too
      console.log(error);
      localStorage.removeItem('ph-admin-user-data');
    })
};

export default logOut;
