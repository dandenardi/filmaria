import axios from 'axios';

//base url https://sujeitoprogramador.com/
// rota para todos os filmes r-api/?api=filmes


const api = axios.create({
    baseURL:'https://sujeitoprogramador.com//'

});

export default api;