import axios from 'axios';

const instance = axios.create({
  // baseURL: "https://isaloon.herokuapp.com/",
  baseURL: 'http://localhost:8099',
});

export default instance;
