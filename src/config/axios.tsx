// axiosInstance.ts
import axios, { AxiosInstance } from "axios";

interface ApiResponse {
  data: any;
}

interface ApiError {
  message: string;
}

const instance: AxiosInstance = axios.create({
  baseURL: "https://nexus-express.onrender.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

export type { ApiResponse, ApiError };
