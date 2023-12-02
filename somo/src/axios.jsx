import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
  return config
});

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('TOKEN')
    window.location.reload();
    router.navigate('/login')
    return error;
  }
  throw error;
})

// New function for handling signup
export const signup = (data) => axiosClient.post('/signup', data);

// New function for handling login
export const login = (data) => axiosClient.post('/login', data);

export default axiosClient;
