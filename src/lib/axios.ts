import axios from "axios";
import { env } from "@/env";

export const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export const axiosAuth = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});
