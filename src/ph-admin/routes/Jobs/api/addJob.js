import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addJob = (name, company, user) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/vacancies`,

    {
      name,
      company_id: company.id,
      employer_id: user.id,

      // default fields
      details: '<p></p>',
      vacancy_role: 1,
      seniority: 1,
      experience_from: 0,
      experience_up: 1,
      application_type: 0,
      application_link: null,
      plan_id: 1,
      hash: null,
      status: 'draft',
    },

    {
      headers: { Authorization: token }
    }
  );
}

export default addJob;

// application_link: null
// application_type: 0
// companies: []
// company_id: 1
// details: "<p></p>"
// employer_id: 2
// experience_from: 0
// experience_up: 1
// hash: null
// name: "name-=-="
// plan_id: 1
// seniority: 1
// status: "draft"
// vacancy_role: 1
