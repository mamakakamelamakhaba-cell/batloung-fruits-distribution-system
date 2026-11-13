
import axios from 'axios';

// Connect frontend to the deployed Render backend
const api = axios.create({
  baseURL: 'https://batloung-fruits-distribution-system-k5uc.onrender.com/api'
});

// Attach login token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('bf_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle expired or invalid login tokens
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem('bf_token');
      localStorage.removeItem('bf_user');

      if (location.pathname !== '/login') {
        location.href = '/login';
      }
    }

    return Promise.reject(err);
  }
);

export default api;

// Format a number as Maloti currency (M)
export const money = (n) =>
  'M ' + Number(n || 0).toLocaleString('en-ZA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
