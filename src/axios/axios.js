import axios from 'axios';
import store from '../store'

axios.interceptors.request.use(config =>{
  console.log(config);
  if(store.state.token){
    console.log(store.state.token);
    config.headers.token = store.state.token
  }
  return config
},
    error => Promise.error(error))
