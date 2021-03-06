import axios from 'axios';
import { format } from 'date-fns';

import { API_URL, subUrl } from './../../../api/apiUrl';

// state - own react-table state
// data-path - url-parh for request
const getUsersCount = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  const { filtered } = state;

  // where template for request
  const where = {};

  // when we are typing something inside filter-fields state of react-table is changing
  // we take filter inputs values and inject to request params
  filtered.forEach(i => {
    // if (i.id === 'id') where[i.id] = i.value
    // else               where[i.id] = { 'like': '%' + i.value + '%' }

    // id //
    if (i.id === 'id') {
      where[i.id] = i.value;

    // name //
    } else if (i.id === 'name') {
      where.fullName = { 'like': '%' + i.value + '%' }
      // where.or = [
      //   { 'name':    { 'like': `%${i.value}%`} },
      //   { 'surname': { 'like': `%${i.value}%`} },
      // ]

    // role //
    } else if (i.id === 'user_role_id') {
      i.value ? where[i.id] = Number(i.value) : where[i.id] = null;

    // Created //
    } else if (i.id === 'created') {
      const createdDate = i.value && format(i.value, 'yyyy-MM-dd');
      if (createdDate) {
        return where.created = { 'gt': createdDate }
      }

    // lastLogin //
    } else if (i.id === 'lastLogin') {
      const lastLoginDate = i.value && format(i.value, 'yyyy-MM-dd');
      if (lastLoginDate) {
        return where.lastLogin = { 'gt': lastLoginDate }
      }

    // roles //
    } else if (i.id === 'roles') {
      i.value ? where.access = { 'inq': [Number(i.value)] } : where.access = null;

    } else {
      where[i.id] = { 'like': '%' + i.value + '%' }
    }
  });

  // get-request for count
  return axios.get(`${API_URL}/${subUrl}/users/searchExtra`, {
    // inject where to params
    params: {
      filter: { where },
      count: true
    },
    headers: { Authorization: token } // backend doesn't check it
  })
};

export default getUsersCount;
