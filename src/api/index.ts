
import axios from 'axios';

const api = axios.create({
  baseURL:'http://127.0.0.1:4000',
  timeout: 3000, //延迟时间
  headers: {
    "content-Type": "application/json"
  }
})

export default api
