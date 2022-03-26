import axios from 'axios';

const baseURL = `http://${window.location.hostname}:5000`;
console.log(window.location.hostname)
const axiosConfig = axios.create({
  baseURL: baseURL
});

export default axiosConfig;