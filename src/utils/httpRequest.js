import axios from 'axios';
// require('dotenv').config()
const request = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});
export { request };
