import axios from 'axios';

import { API_URL, subUrl } from './../../../api/apiUrl';

// state - own react-table state
// data-path - url-parh for request
const getJobsCount = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { filtered } = state;

  // where template for request
  const where = {};

  // when we are typing something inside filter-fields state of react-table is changing
  // we take filter inputs values and inject to request params
  filtered.forEach(i => {
    // if (i.id === 'id') where[i.id] = i.value
    // else               where[i.id] = { 'like': '%' + i.value + '%' }

    // Id column // +
    if (i.id === 'id') {
      where[i.id] = i.value;

    // Job column // +
    } else if (i.id === 'name') {
      where[i.id] = { 'like': '%' + i.value + '%' };

    // Locations column // +
    } else if (i.id === 'locations') {
      where.locations = { 'inq': [Number(i.value)] }

    // User column // +
    } else if (i.id === 'employer') {
      // where[i.id] = Number(i.value);
      where.employer_id = i.value.id;

    // Status column // +
    } else if (i.id === 'status') {
      where[i.id] = i.value;

    // Plan column // +
    } else if (i.id === 'plan_id') {
      where[i.id] = i.value;
    }
  });

  // get-request for count
  return axios.get(`${API_URL}/${subUrl}/vacancies/searchExtra`, {
    // inject where to params
    params: {
      filter: { where },
      count: true
    },
    headers: { Authorization: token } // backend doesn't check it
  })
};

export default getJobsCount;
