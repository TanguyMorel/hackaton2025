import axios from "axios";

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URI}api/`,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
});

export default instance;