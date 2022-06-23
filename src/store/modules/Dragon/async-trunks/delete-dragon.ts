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

export const deleteDragon: any = createAsyncThunk(
  "dragon/delete-dragons",
  async (id: number) => {
    try {
      const baseRequest: BaseRequest = {
        method: "DELETE",
        url: `/dragon/${id}`,
      };
      const response = await request(baseRequest);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
