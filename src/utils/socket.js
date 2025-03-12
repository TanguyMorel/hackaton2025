import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL =  'http://localhost:3001';

export default io(URL, {
    extraHeaders: {
        access_token: localStorage.getItem('token')
    }
});
