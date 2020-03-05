import axios from 'axios';

import { API_URL, subUrl } from '../../../api/apiUrl';
import userId from './getUserId';


export const getAdminUserData = () => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/users/${userId}`,
    {
      headers: { Authorization: token }
    }
  )
    .then(res => res.data)
}

export const getUserData = userId => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.get(
    `${API_URL}/${subUrl}/users/${userId}`,
    {
      headers: { Authorization: token }
    }
  )
    .then(res => res.data)
}
