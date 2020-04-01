import axios from 'axios';
import { format } from 'date-fns';

import { API_URL, subUrl } from './../../../api/apiUrl';

const getUsers = state => {
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

    // name //
    } else if (i.id === 'name') {
      filter.where.fullName = { 'like': '%' + i.value + '%' }

    // role //
    } else if (i.id === 'user_role_id') {
      i.value ? filter.where[i.id] = Number(i.value) : filter.where[i.id] = null;

    // created //
    } else if (i.id === 'created') {
      const createdDate = i.value && format(i.value, 'yyyy-MM-dd');
      if (createdDate) {
        return filter.where.created = { 'gt': createdDate }
      }
      filter.order = i.value ? 'created DESC' : 'id DESC';


    // lastLogin
    } else if (i.id === 'lastLogin') {
      const lastLoginDate = i.value && format(i.value, 'yyyy-MM-dd');
      if (lastLoginDate) {
        return filter.where.lastLogin = { 'gt': lastLoginDate }
      }
      filter.order = i.value ? 'lastLogin DESC' : 'id DESC';

    } else if (i.id === 'roles') {
      i.value ? filter.where.access = { 'inq': [Number(i.value)] } : filter.where.access = null;

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
  return axios.get(`${API_URL}/${subUrl}/users/searchExtra`, {
    params: { filter },
    headers: { Authorization: token } // backend doesn't check it
  })
};

export default getUsers;
