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
    return axios.patch(path, { name, slug, domain, weight, logo, cover, id }, { headers })


  // 2. users //
  } else if (dataPath === 'users') {
    const { surname, email, emailVerified, admin, status, job_title, experience, image, location, skills } = state;
    return axios.patch(
      path,
      {
        id,
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
    const { details, slug, logo, cover, skills, locations, role, company, created, modified, published, views, } = state;

    // convert [ {skill1}, {skill2} ] to "skill1, skill2"
    const skillsNames = [];
    for (let i = 0; i < skills.length; i++) {
      skillsNames.push(skills[i].name)
    };
    const skills_string = skillsNames.toString();

    return axios.post(
      `${path}/updateJob`,
      {
        // id,
        name,
        details,
        slug,
        logo: logo ? logo.split('/').pop() : '',   // cut logo url string to filename
        cover: cover ? cover.split('/').pop() : '', // cut cover url string to filename
        skills_string,
        locations,
        role,
        company: company.name,

        // "seniority": 2,
        // "experience_from": 2,
        // "experience_up": 4,

        // company:"google",
        // "created": "2020-01-28T10:28:57.000Z",
        // "modified": "2020-01-28T11:24:33.864Z",
        // "published": "2020-01-01T10:26:41.000Z",
        // "paused": null,
        // "seniority": 2,
        // "experience_from": 2,
        // "experience_up": 4,
        // "application_type": 0,
        // "application_link": null,
        // "employer_id": 1120,
        // "plan_id": null,
        // "company_id": 9301,
        // "hash": null,
        // "source": null,
        // "source_id": null,
        // "status": null,
        // "logo": "ca5c6e1b-55cd-4067-9902-a3dcc2c62bdf_250.jpg",
        // "cover": "767a9ac9-a460-4fcc-9867-46a5576374e6_400.png",
        // "views": 4,
        // "impressions": null,
        // "saved": false,
        // "applied": false,
        // "description": "A job at #Fly in 'Afak. Requires 2-4 years of experience and the following skills: AB Testing.",
        // "logoUrl": "https://producthired.com/api/api/containers/logo/download/ca5c6e1b-55cd-4067-9902-a3dcc2c62bdf_250.jpg",
        // "coverUrl": "https://producthired.com/api/api/containers/cover/download/767a9ac9-a460-4fcc-9867-46a5576374e6_400.png",
        // "role": {
          //   "id": 3, "name": "Product Marketing Manager", "slug": "product-marketing-manager", "top": 1, "weight": 2698
          // }

          // slug,
          // description,
          // created,
          // modified,
          // published,
          // views,


          // slug, // не нужен
        },
        { headers }
        )


  // 4. skills //
  } else if (dataPath === 'skills') {
    const { slug, markers, weight } = state;
    return axios.patch(path, { id, name, weight, slug, markers }, { headers })


  // 5. vacancy_roles //
  } else if (dataPath === 'vacancy_roles') {
    const { slug, weight } = state;
    return axios.patch(path, { id, name, slug, weight }, { headers })


  // 6. plans //
  } else if (dataPath === 'plans') {
    const { price } = state;
    return axios.patch(path, { id, name, price }, { headers })
  }
};

export default editRequest;
