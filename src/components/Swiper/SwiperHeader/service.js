import axios from 'axios';

export const memberApi = axios.create({
  baseURL: 'https://648747fbbeba629727906290.mockapi.io/member',
});
