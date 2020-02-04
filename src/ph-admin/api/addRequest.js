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
    const { surname, password, email } = state;
    return axios.post(path, { name, surname, password, email }, { headers })

  // 3. jobs //
  } else if (dataPath === 'vacancies') {
    const { company, user } = state;
    return axios.post(
      path,
      {
        name,
        details: '<p></p>',
        vacancy_role: 1,
        seniority: 1,
        experience_from: 0,
        experience_up: 1,
        application_type: 0,
        application_link: null,
        employer_id: user.id,
        plan_id: 1,
        company_id: company.id,
        hash: null,
        status: 'draft',
        companies: [],
      },
      { headers }
    )


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
