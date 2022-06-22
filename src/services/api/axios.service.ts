import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1`,
});

export const request = async (requestConfig: AxiosRequestConfig) =>
  new Promise<AxiosResponse>(async (resolve, reject) => {
    const { ...request } = requestConfig;
    try {
      const response = (await Promise.race([api(request)])) as AxiosResponse;
      resolve(response);
    } catch (error) {
      console.log(error);
    }
  });

export const isAxiosError = axios.isAxiosError;
