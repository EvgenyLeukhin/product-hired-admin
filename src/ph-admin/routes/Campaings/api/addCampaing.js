import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const addCampaing = (name, employer_id, company_id) => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;

  return axios.post(
    `${API_URL}/${subUrl}/vacancies`,

    {
      name, employer_id, company_id,

      // default fields
      details: '<p></p>',
      application_link: null,
      application_type: 0,
      experience_from: 0,
      experience_up: 1,
      hash: null,
      plan_id: null,
      seniority: null,
      status: "draft",
      vacancy_role: 1,
    },

    {
      headers: { Authorization: token }
    }
  );
}

export default addCampaing;
