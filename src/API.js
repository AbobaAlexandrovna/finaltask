import axios from 'axios';

export default axios.create({
    baseURL: "https://631e4e339f946df7dc40cce0.mockapi.io/",
    responseType: "json"
});
