import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@services/api/axios.service";
import { AxiosResponse } from "axios";

export type BaseRequest = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: any;
  headers?: any;
  timeout?: number;
};

export const listDragons: any = createAsyncThunk(
  "dragon/list-dragon",
  async () => {
    try {
      const baseRequest: BaseRequest = {
        method: "GET",
        url: `/dragon`,
      };
      const response: AxiosResponse = await request(baseRequest);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
