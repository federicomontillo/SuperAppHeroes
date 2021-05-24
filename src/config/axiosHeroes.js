import axios from 'axios';


const clienteAxiosHeroes = axios.create({
    baseURL: "/api/"
});

export default clienteAxiosHeroes;