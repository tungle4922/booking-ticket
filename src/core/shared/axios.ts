import axios, { AxiosError, AxiosInstance } from "axios";

const cancelTokenSource = axios.CancelToken.source();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8080',
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
  cancelToken: cancelTokenSource.token,
});

export { axiosInstance, cancelTokenSource };
