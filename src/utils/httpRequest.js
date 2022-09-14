import axios from 'axios'
// require('dotenv').config()
const request = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
})
// const staticFile = axios.create({
//     baseURL: process.env.REACT_APP_STATIC_FILE_URL,
// })
export {request}