import axios from 'axios';

import API_URL from './apiUrl';
import token from './getToken';

const editRequest = (state, dataPath) => {
  const { id, name } = state;
  const headers = { Authorization: token };
  const path = `${API_URL}/${dataPath}/${id}`;

  // plans //
  if (dataPath === 'plans') {
    const { price } = state;
    return axios.patch(
      path, { "name": name, "price": price, "id": id }, { headers }
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
