import axios from 'axios';

//root url for backend 

const instance = axios.create({
    baseURL: "http://localhost:3001"
});


export default instance;