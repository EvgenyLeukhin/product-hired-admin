// userData save in localStorage as string, we should parse it to json
const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));
const token = userData && userData.id;

export default token;
