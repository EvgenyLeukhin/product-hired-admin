import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const getData = (state, dataPath, startOrder) => {
  const { pageSize, page, filtered, sorted } = state; // from own state of react-table

  // filter-template
  const filter = {
    where: {},
    limit: pageSize,
    skip: page * pageSize,
    order: startOrder
  };

  // inject where to filter
  filtered.forEach(i => {
    if (i.id === 'id') filter.where[i.id] = i.value
    else               filter.where[i.id] = { 'like': '%' + i.value + '%' }
  });

  // inject order to filter
  sorted.forEach(i => {
    const desc = i.desc ? 'DESC' : 'ASC'
    filter.order = `${i.id} ${desc}`;
  });

  // get-request for data
  return axios.get(`${API_URL}/${subUrl}/${dataPath}`, {
    params: { filter },
    headers,
  })
    // return [data]
    .then(res => res.data)
};

export default getData;
