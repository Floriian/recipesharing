import { store } from "@/app/store/store";
import { getReduxState } from "@/lib/getReduxState";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
