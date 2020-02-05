import axios from 'axios';

import { API_URL, subUrl } from './apiUrl';
import token from './getToken';

const headers = { Authorization: token };

const editRequest = (state, dataPath) => {
  const { id, name } = state;
  const path = `${API_URL}/${subUrl}/${dataPath}/${id}`; // id don't need to pass into body if it is in url

  // 1. companies //
  if (dataPath === 'companies') {
    const { slug, domain, weight, logo, cover } = state;
    return axios.patch(path, { name, slug, domain, weight, logo, cover }, { headers })


  // 2. users //
  } else if (dataPath === 'users') {
    const { surname, email, emailVerified, admin, status, job_title, experience, image, location, skills } = state;
    return axios.patch(
      path,
      {
        name,
        surname,
        email,
        admin,
        emailVerified,
        status,
        job_title,
        experience,
        image,
        location_id: location.id,
        skills,
      },
      { headers }
    )


  // 3. jobs //
  } else if (dataPath === 'vacancies') {
    const {
      details,
      logo,
      cover,
      skills,
      locations,
      role,
      company,
      user,
      plan,
      jobStatus,
      seniority,
      experience_up,
      experience_from,
      created,
    } = state;

    // convert [ {skill1}, {skill2} ] to "skill1, skill2"
    const skillsNames = [];
    for (let i = 0; i < skills.length; i++) {
      skillsNames.push(skills[i].name)
    };
    const skills_string = skillsNames.toString();

    return axios.post(
      `${path}/updateJob`,
      {
        name,
        details,
        logo: logo ? logo.split('/').pop() : '',   // cut logo url string to filename
        cover: cover ? cover.split('/').pop() : '', // cut cover url string to filename
        skills_string,
        locations,
        role,
        company: company.length ? company[0].name : company.name,
        employer_id: user.id,
        plan_id: plan.value,
        status: jobStatus.value,
        seniority: seniority.value,
        experience_from,
        experience_up,
        created,

        // "paused": null,
        // "application_type": 0,
        // "application_link": null,
        // "employer_id": 1120,
        // "hash": null,
        // "source": null,
        // "source_id": null,
        // "logo": "ca5c6e1b-55cd-4067-9902-a3dcc2c62bdf_250.jpg",
        // "cover": "767a9ac9-a460-4fcc-9867-46a5576374e6_400.png",
        // "impressions": null,
        // "saved": false,
        // "applied": false,
        // "description": "A job at #Fly in 'Afak. Requires 2-4 years of experience and the following skills: AB Testing.",
        // "logoUrl": "https://producthired.com/api/api/containers/logo/download/ca5c6e1b-55cd-4067-9902-a3dcc2c62bdf_250.jpg",
        // "coverUrl": "https://producthired.com/api/api/containers/cover/download/767a9ac9-a460-4fcc-9867-46a5576374e6_400.png",
        // "role": {
          //   "id": 3, "name": "Product Marketing Manager", "slug": "product-marketing-manager", "top": 1, "weight": 2698
          // }
        },
        { headers }
        )


  // 4. skills //
  } else if (dataPath === 'skills') {
    const { slug, markers, weight } = state;
    return axios.patch(path, { name, weight, slug, markers }, { headers })


  // 5. vacancy_roles //
  } else if (dataPath === 'vacancy_roles') {
    const { slug, weight } = state;
    return axios.patch(path, { name, slug, weight }, { headers })


  // 6. plans //
  } else if (dataPath === 'plans') {
    const { price } = state;
    return axios.patch(path, { name, price }, { headers })
  }
};

export default editRequest;
