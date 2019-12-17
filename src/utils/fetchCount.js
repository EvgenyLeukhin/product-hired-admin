import axios from 'axios';
import API_URL from '../consts/apiUrl';

const fetchCount = (countUrl) => {

  const userToken = localStorage.getItem('ph-admin-token');

  return axios.get(`${API_URL}/${countUrl}`, {
    headers: { Authorization: userToken }
  }).then(res => {
    return res.data.count;
  }).catch(error => {
    return console.log('Error with count request' + error);
  });
}

export default fetchCount;
