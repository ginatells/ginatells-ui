import axios from 'axios';

const baseURL = "http://localhost:5000";

const axiosConfig = axios.create({
  baseURL: baseURL
});

export default axiosConfig;