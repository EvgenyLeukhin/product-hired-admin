import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editUser = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;
  const {
    id,
    name,
    surname,
    email,
    job_title,
    emailVerified,
    admin,
    status,
    experience,
    image,
    location,
    skills,
    emailSettings,
    emailJobApplication,
    emailMarketing,
    seniority
  } = state;

  return axios.patch(
    `${API_URL}/${subUrl}/users/${id}`,

    {
      name,
      surname,
      email,
      job_title,
      emailVerified,
      admin,
      status,
      experience,
      image,
      location,
      skills,
      emailSettings,
      emailJobApplication,
      emailMarketing,
      seniority_id: seniority.value,
    },

    {
      headers: { Authorization: token }
    }
  );
}

export default editUser;

// if in a request post field "admin: true",
// we will have is response admin role inside roles array:

// we need to check for admin rights by roles field
// roles: [
//   {
//     id: 4,
//     name: "admin",
//     description: null,
//     created: "2019-04-04T11:30:27.000Z",
//     modified: "2019-04-04T11:30:27.000Z"
//   }
// ]

// in code
// check for admin rights
// const { roles } = original;
// roles && roles.map(i => {
//   i.name === 'admin' && this.setState({ admin: true });
// });
