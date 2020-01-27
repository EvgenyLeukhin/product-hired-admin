import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const editRequest = (state, dataPath) => {
  const { id, name } = state;
  const path = `${API_URL}/${subUrl}/${dataPath}/${id}`;

  // 1. companies //
  if (dataPath === 'companies') {
    const { slug, domain, weight, logo, cover } = state;
    return axios.patch(path, { name, slug, domain, weight, logo, cover, id }, { headers })


  // 2. users //
  } else if (dataPath === 'users') {
    const { surname, email, emailVerified, admin, status, job_title, experience, image, location } = state;
    return axios.patch(
      path,
      {
        id,
        name,
        surname,
        email,
        admin,
        emailVerified,
        status,
        job_title,
        experience,
        image,
        location_id: location.id
      },
      { headers }
    )


  // 3. jobs //


  // 4. skills //
  } else if (dataPath === 'skills') {
    const { slug, markers, weight } = state;
    return axios.patch(path, { id, name, weight, slug, markers }, { headers })


  // 5. vacancy_roles //
  } else if (dataPath === 'vacancy_roles') {
    const { slug, weight } = state;
    return axios.patch(path, { id, name, slug, weight }, { headers })


  // 6. plans //
  } else if (dataPath === 'plans') {
    const { price } = state;
    return axios.patch(path, { id, name, price }, { headers })
  }
};

export default editRequest;
