import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addJob = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;
  const {
    name, company, user, details, vacancy_role, seniority, experience_from, experience_up, application_type, application_link, plan_id, hash, status
  } =  state;

  return axios.post(
    `${API_URL}/${subUrl}/vacancies`,

    {
      name,
      company_id: company.id,
      employer_id: user.id,

      // default fields from the state when add
      details, vacancy_role, seniority,
      experience_from: experience_from.value,
      experience_up: experience_up.value,
      application_type, application_link, plan_id, hash, status,
    },

    {
      headers: { Authorization: token }
    }
  );
}

export default addJob;
