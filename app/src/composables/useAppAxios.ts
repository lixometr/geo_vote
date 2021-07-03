import { makeAxios } from "@vue-composable/axios";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:3000" : '/api',
});
export const useAppAxios = () => makeAxios(axiosInstance);
