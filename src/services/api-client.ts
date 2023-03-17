import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '735f0810b9964d00ac265f26991dcb5e',
  },
});
