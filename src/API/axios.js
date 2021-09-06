
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://isaloon.herokuapp.com/",
}); 

export default instance;