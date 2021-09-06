
import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8099/",
}); 

export default instance;