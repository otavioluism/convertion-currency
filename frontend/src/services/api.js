import axios from 'axios'; 

// axios é o que comunica nossa aplicacao frontend com o backend
// colocamos nossa base url para sempre passar a primeira parte do link 
const api = axios.create({ 
  baseURL: "http://localhost:3333",
});

export default api;