import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const addRequest = (state, dataPath) => {
  const { name } = state;
  const path = `${API_URL}/${subUrl}/${dataPath}`;

  // 1. companies //
  if (dataPath === 'companies') {
    const { slug, domain, weight, logo, cover } = state;
    return axios.post(path, { name, slug, domain, weight, logo, cover }, { headers })

  // 2. users //
  } else if (dataPath === 'users') {
    const { password, surname, email, emailVerified, admin, status, job_title, experience, image } = state;

    // do not match the name or other field
    return axios.post(
      path,
      { name, password, surname, email, experience, job_title, status,

        "emailVerified": emailVerified, // -
        "admin": admin, // -
        "image": image, // -

        // static fields
        // "admin": false,
        // "emailVerified": false,
        // "adminVerified": false,
        "image": {
          "url": "/api/api/containers/undefined/download/e8b955b5-f9d7-4a91-944a-a6f113a40977_250.png",
          "color": 0,
          "person": 0,
        },
        "location_id": 22247,
        "imageUrl": "https://producthired.com/api/api/containers/undefined/download/e8b955b5-f9d7-4a91-944a-a6f113a40977_250.png",
      },
      { headers }
    )

  // 3. jobs //


  // 4. skills //
  } else if (dataPath === 'skills') {
    const { slug, markers, weight } = state;
    return axios.post(path, { name, weight, slug, markers }, { headers })


  // 5. vacancy_roles //
  } else if (dataPath === 'vacancy_roles') {
    const { slug, weight } = state;
    return axios.post(path, { name, slug, weight }, { headers })


  // 6. plans
  } else if (dataPath === 'plans') {
    const { price } = state;
    return axios.post(path, { name, price }, { headers })
  }
};

export default addRequest;
