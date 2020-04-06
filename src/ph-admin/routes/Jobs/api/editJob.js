import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editJob = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;
  const {
    id,
    name,
    details,
    logo,
    cover,
    skills,
    locations,
    vacancy,
    company,
    status,
    seniority,
    experience_up,
    experience_from,
    employer_id,
    plan_id,
    published,
    application_link
    // created,
  } = state;

  // convert [ {skill1}, {skill2} ] to "skill1, skill2"
  const skillsNames = [];
  for (let i = 0; i < skills.length; i++) {
    skillsNames.push(skills[i].name)
  };
  const skills_string = skillsNames.toString();

  return axios.post(
    `${API_URL}/${subUrl}/vacancies/${id}/updateJob`,

    {
      name,
      details,
      logo: logo ? logo.split('/').pop() : '',   // cut logo url string to filename
      cover: cover ? cover.split('/').pop() : '', // cut cover url string to filename
      skills_string,
      locations,
      company: company.length ? company[0].name : company.name,
      employer_id,
      plan_id,
      status,
      seniority,
      experience_from: experience_from.value,
      experience_up: experience_up.value,
      role: vacancy,
      modified: `${new Date().toISOString()}`,
      published,
      application_link
    },

    {
      headers: { Authorization: token }
    }
  );
}

export default editJob;
