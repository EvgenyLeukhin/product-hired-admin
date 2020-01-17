import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const editRequest = (state, dataPath) => {
  const { id, name } = state;
  const headers = { Authorization: token };
  const path = `${API_URL}/${subUrl}/${dataPath}/${id}`;

  // plans //
  if (dataPath === 'plans') {
    const { price } = state;

    return axios.patch(
      path, { "name": name, "price": price, "id": id }, { headers }
    )

  // companies //
  } else if (dataPath === 'companies') {
    const { slug, domain, weight, logo, cover } = state;

    return axios.patch(
      path,
      {
        "name": name,
        "slug": slug,
        "domain": domain,
        "weight": weight,
        "logo": logo,
        "cover": cover,
        "id": id,
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

    return axios.patch(
      path,
      {
        "id": id,
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

    return axios.patch(
      path,
      {
        "id": id,
        "name": name,
        "slug": slug,
        "weight": weight,
      },
      { headers }
    )

  // skills //
  } else if (dataPath === 'skills') {
    const { slug, markers } = state;

    return axios.patch(
      path,
      {
        "name": name,
        "slug": slug,
        "markers": markers,
        "id": id,
      },
      { headers }
    )
  }
};

export default editRequest;