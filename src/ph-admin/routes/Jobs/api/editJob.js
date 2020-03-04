import axios from 'axios';
import { API_URL, subUrl } from '../../../api/apiUrl';

const editJob = state => {
  const token = JSON.parse(localStorage.getItem('ph-admin-user-data')).id;
  const {
    id,
    name,
    user,
    details,
    logo,
    cover,
    skills,
    locations,
    vacancy,
    company,
    plan,
    status,
    seniority,
    experience_up,
    experience_from,
    company_id, employer_id, plan_id, vacancy_role,
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
      logo: '',   // cut logo url string to filename
      cover: '', // cut cover url string to filename
      skills_string,
      locations,
      company: company.length ? company[0].name : company.name,
      company_id,
      employer_id,
      plan_id,
      status,
      seniority,
      experience_from,
      experience_up,
      role: vacancy,
      // created,
      modified: `${new Date().toISOString()}`,
    },

    {
      headers: { Authorization: token }
    }
  );
}

export default editJob;
