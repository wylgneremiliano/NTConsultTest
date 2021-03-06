import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@services/api/axios.service";

export type BaseRequest = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: any;
  headers?: any;
  timeout?: number;
};

export const detailsDragon: any = createAsyncThunk(
  "dragon/detais-dragons",
  async (id: number) => {
    try {
      const baseRequest: BaseRequest = {
        method: "GET",
        url: `/dragon/${id}`,
      };

      const response = await request(baseRequest);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
