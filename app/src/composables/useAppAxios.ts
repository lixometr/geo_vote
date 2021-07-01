import { makeAxios } from "@vue-composable/axios";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
export const useAppAxios = () => makeAxios(axiosInstance);
