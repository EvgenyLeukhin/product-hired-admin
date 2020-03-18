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

    // Locations column // ------------
    } else if (i.id === 'locations') {
      filter.where.locations = { 'inq': [Number(i.value)] }

    // User column // ------------
    } else if (i.id === 'employer') {
      filter.where.employer_id = i.value.id;

    // Status column // +
    } else if (i.id === 'status') {
      filter.where[i.id] = i.value;

    // Plan column // +
    } else if (i.id === 'plan_id') {
      filter.where[i.id] = i.value;
    }
  });

  // filtered.forEach(i => {
  //   if (i.id === 'id') {
  //     // filter.where[i.id] = i.value;
  //     filter.where[i.id] = { 'like': i.value };
  //   } else if (i.id === 'plan_id') {
  //     filter.where[i.id] = i.value;
  //   } else {
  //     filter.where[i.id] = { 'like': '%' + i.value + '%' };
  //   }
  // });

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
