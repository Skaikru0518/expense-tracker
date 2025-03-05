import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response Interceptor

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const status = error.response.status;

            if (status === 401) {
                window.location.href = '/login';
                return Promise.reject(
                    new Error('Unauthorized - Redirecting to login'),
                );
            } else if (status === 500) {
                console.error('Server error. Please try again later.');
                return Promise.reject(
                    new Error('Server error. Please try again later.'),
                );
            } else {
                console.error(
                    `Error ${status}: ${
                        error.response.data.message || 'Unknown error'
                    }`,
                );
                return Promise.reject(error); // Itt megtartjuk az eredeti hibát
            }
        } else if (error.code === 'ECONNABORTED') {
            console.error('Request timeout. Please try again.');
            return Promise.reject(
                new Error('Request timeout. Please try again.'),
            );
        } else {
            console.error('Network error. Please check your connection.');
            return Promise.reject(
                new Error('Network error. Please check your connection.'),
            );
        }
    },
);

export default axiosInstance;
