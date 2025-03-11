import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:3001/api/',
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
});

export default instance;