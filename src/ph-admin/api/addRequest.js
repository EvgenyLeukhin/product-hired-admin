import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const addRequest = (state, dataPath) => {
  const { name } = state;
  const headers = { Authorization: token };
  const path = `${API_URL}/${subUrl}/${dataPath}`;

  // plans //
  if (dataPath === 'plans') {
    const { price } = state;

    return axios.post(
      path, { "name": name, "price": price }, { headers }
    )

  // companies //
  } else if (dataPath === 'companies') {
    const { slug, domain, weight, logo, cover } = state;

    return axios.post(
      path,
      {
        "name": name,
        "slug": slug,
        "domain": domain,
        "weight": weight,
        "logo": logo,
        "cover": cover,
      },
      { headers }
    )

  // users //
  } else if (dataPath === 'users') {
    const {
      surname,
      email,
      emailVerified,
      admin,
      status,
      job_title,
      experience,
      image
    } = state;

    return axios.post(
      path,
      {
        "name": name, // do not match the name or other field
        // "surname": surname,
        // "email": email,
        // "admin": admin,
        // "emailVerified": emailVerified,
        // "status": status,
        // "job_title": job_title,
        // "experience": experience,
        // "image": image,
        // "name": "Testtesttest",
        "surname": "Test++",
        "password": "TestTestTestTest++",
        "adminVerified": false,
        "status": true,
        "image": {
          "url": "/api/api/containers/undefined/download/e8b955b5-f9d7-4a91-944a-a6f113a40977_250.png",
          "color": 0,
          "person": 0,
        },
        "location_id": 22247,
        "job_title": "Tester",
        "experience": 1,
        "email": "test2@mail.com",
        "emailVerified": false,
        // id: 1092,
        // "created": "2020-01-23T03:37:57.995Z",
        // "modified": "2020-01-23T03:37:57.995Z",
        "admin": false,
        "imageUrl": "https://producthired.com/api/api/containers/undefined/download/e8b955b5-f9d7-4a91-944a-a6f113a40977_250.png",
      },
      { headers }
    )

  // vacancy_roles //
  } else if (dataPath === 'vacancy_roles') {
    const { slug, weight } = state;

    return axios.post(
      path,
      {
        "name": name,
        "slug": slug,
        "weight": weight,
      },
      { headers }
    )

  // skills //
  } else if (dataPath === 'skills') {
    const { slug, markers, weight } = state;

    return axios.post(
      path,
      {
        "name": name,
        "weight": weight,
        "slug": slug,
        "markers": markers,
      },
      { headers }
    )
  }
};

export default addRequest;
