import axios from 'axios';

import { API_URL, subUrl } from './../../../api/apiUrl';

// state - own react-table state
// data-path - url-parh for request
const getCompaniesCount = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { filtered } = state;

  // where template for request
  const where = {};

  // when we are typing something inside filter-fields state of react-table is changing
  // we take filter inputs values and inject to request params
  filtered.forEach(i => {
    if (i.id === 'id') where[i.id] = i.value
    else               where[i.id] = { 'like': '%' + i.value + '%' }
  });

  // get-request for count
  return axios.get(`${API_URL}/${subUrl}/companies/count`, {
    // inject where to params
    params: { where },
    headers: { Authorization: token } // backend doesn't check it
  })
    // return count (number)
    .then(res => res.data.count)
};

export default getCompaniesCount;
