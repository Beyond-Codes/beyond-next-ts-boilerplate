import axios, { Axios } from 'axios';

const apiURL: string = process.env.NEXT_PUBLIC_API_URL || '';
const apiToken: string = process.env.NEXT_PUBLIC_API_TOKEN || '';

const API = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `X-Api-Token ${apiToken}`,
  },
}) as Axios;

export default API;
