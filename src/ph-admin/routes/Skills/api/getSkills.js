import axios from 'axios';

import { API_URL, subUrl } from './../../../api/apiUrl';

const getSkills = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { pageSize, page, filtered, sorted } = state; // from own state of react-table

  // filter-template
  const filter = {
    where: {},
    limit: pageSize,
    skip: page * pageSize,
    order: 'id DESC',
  };

  // inject where to filter
  filtered.forEach(i => {
    // id //
    if (i.id === 'id') {
      filter.where[i.id] = i.value;
    } else (
      filter.where[i.id] = { 'like': '%' + i.value + '%' }
    )
  });

  // inject order to filter
  sorted.forEach(i => {
    const desc = i.desc ? 'DESC' : 'ASC'
    filter.order = `${i.id} ${desc}`;
  });

  // get-request for data
  return axios.get(`${API_URL}/${subUrl}/skills`, {
    params: { filter },
    headers: { Authorization: token } // backend doesn't check it
  })
};

export default getSkills;
