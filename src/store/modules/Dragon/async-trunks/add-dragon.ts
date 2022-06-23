import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "@services/api/axios.service";
import { IDragons } from "@src/interfaces/IDragon";

export type BaseRequest = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: any;
  headers?: any;
  timeout?: number;
};

export const addDragon: any = createAsyncThunk(
  "dragon/add-dragons",
  async (data: IDragons) => {
    try {
      const baseRequest: BaseRequest = {
        method: "POST",
        url: `/dragon`,
        data,
      };

      const response = await request(baseRequest);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
