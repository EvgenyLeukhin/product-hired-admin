import axios from 'axios';

import { API_URL, subUrl } from './../../../api/apiUrl';

const getJobs = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { pageSize, page, filtered, sorted } = state; // from own state of react-table

  // filter-template
  const filter = {
    where: {},
    limit: pageSize,
    skip: page * pageSize,
    order: 'published DESC'
  };

  // inject where to filter
  filtered.forEach(i => {
    // Id column // +
    if (i.id === 'id') {
      filter.where[i.id] = i.value;

    // Job column // +
    } else if (i.id === 'name') {
      filter.where[i.id] = { 'like': '%' + i.value + '%' };

    // Locations column // +
    } else if (i.id === 'locations') {
      if (i.value) {
        filter.where.locations = { 'inq': i.value.map(i => i.id) };
      } else {
        filter.where.locations = {};
      }

    // User column // +
    } else if (i.id === 'employer') {
      if (i.value) {
        filter.where.employer_id = i.value.id;
      } else {
        filter.where.employer_id = null;
      }

    // Company column // +
    } else if (i.id === 'company') {
      console.log(i.value);
      if (i.value) {
        filter.where.companies = { 'inq': i.value.map(i => i.id) };
      } else {
        filter.where.companies = {};
      }

    // Status column // +
    } else if (i.id === 'status') {
      filter.where[i.id] = i.value;

    // Plan column // +
    } else if (i.id === 'plan_id') {
      filter.where[i.id] = i.value;
    }
  });


  // inject order to filter
  sorted.forEach(i => {
    const desc = i.desc ? 'DESC' : 'ASC'
    filter.order = `${i.id} ${desc}`;
  });

  // get-request for data
  return axios.get(`${API_URL}/${subUrl}/vacancies/searchExtra`, {
    params: { filter },
    headers: { Authorization: token } // backend doesn't check it
  })
};

export default getJobs;
