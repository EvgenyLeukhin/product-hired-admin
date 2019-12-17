import axios from 'axios';
import API_URL from '../consts/apiUrl';

const fetchData = (dataUrl, limit, skip) => {
  const userToken = localStorage.getItem('ph-admin-token');

  axios.get(`${API_URL}/${dataUrl}`, {
    headers: { Authorization: userToken },
    params: {
      filter: { "limit": limit, "skip": skip }
    }
  });
}

export default fetchData;
