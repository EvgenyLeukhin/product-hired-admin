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
        "cover": cover
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
        "name": name,
        "surname": surname,
        "email": email,
        "admin": admin,
        "emailVerified": emailVerified,
        "status": status,
        "job_title": job_title,
        "experience": experience,
        "image": image
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
    const { slug, markers } = state;

    return axios.post(
      path,
      {
        "name": name,
        "slug": slug,
        "markers": markers
      },
      { headers }
    )
  }
};

export default addRequest;
