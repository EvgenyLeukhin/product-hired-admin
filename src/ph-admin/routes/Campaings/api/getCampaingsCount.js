import axios from 'axios';
import { format } from 'date-fns';

import { API_URL, subUrl } from '../../../api/apiUrl';

// state - own react-table state
// data-path - url-parh for request
const getCampaingsCount = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { filtered } = state;

  // where template for request
  const where = {};

  // when we are typing something inside filter-fields the state of react-table is changing
  // we take filter inputs values and inject to request params
  filtered.forEach(i => {
    // if (i.id === 'id') where[i.id] = i.value
    // else               where[i.id] = { 'like': '%' + i.value + '%' }

    // Id // +
    if (i.id === 'id') {
      where[i.id] = i.value;

    // Views // -
    // } else if (i.id === 'views') {
    //   where[i.id] = i.value; // filtering doesn't work

    // Job // +
    } else if (i.id === 'name') {
      where[i.id] = { 'like': '%' + i.value + '%' };

    // Locations // +
    } else if (i.id === 'locations') {
      if (i.value) {
        where.locations = { 'inq': i.value.map(i => i.id) };
      } else {
        where.locations = {};
      }

    // User // +
    } else if (i.id === 'employer') {
      if (i.value) {
        where.employer_id = i.value.id;
      } else {
        where.employer_id = null;
      }

    // Company // +
    } else if (i.id === 'company') {
      if (i.value) {
        // where.companies = [i.value.id];
        where.companies = { 'inq': i.value.map(i => i.id) };
      } else {
        where.companies = {};
      }

    // Status // +
    } else if (i.id === 'status') {
      where[i.id] = i.value;

    // Plan // +
    } else if (i.id === 'plan_id') {
      where[i.id] = i.value;

    // Created //
    } else if (i.id === 'created') {
      const createdDate = i.value && format(i.value, 'yyyy-MM-dd');
      where.created = { 'gt': createdDate };
    }
  });

  // get-request for count
  return axios.get(`${API_URL}/${subUrl}/vacancies/searchExtra`, { // TODO vacancies -- > campaings (when it will be ready)
    // inject where to params
    params: {
      filter: { where },
      count: true
    },
    headers: { Authorization: token } // backend doesn't check it
  })
};

export default getCampaingsCount;
