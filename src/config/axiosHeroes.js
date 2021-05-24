import axios from 'axios';


const clienteAxiosHeroes = axios.create({
    baseURL: "/api/2979903088905553/"
});

export default clienteAxiosHeroes;