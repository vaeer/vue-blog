import axios from 'axios';
const env = process.env.NODE_ENV;

axios.create({
  baseURL: env === 'dev' ? '/mock' : '',
  timeout: 10000
});

return new Promise(resolve => {
  resolve()
}).catch(err => {

})