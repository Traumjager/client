import axios from 'axios';
export let url = 'http://localhost:8099';
// export let url = 'https://isaloon.herokuapp.com';
const instance = axios.create({
  // baseURL: "https://isaloon.herokuapp.com/",
  baseURL: url,
});

export default instance;
