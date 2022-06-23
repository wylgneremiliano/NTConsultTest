import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN_VALIDOS } from "@src/constants/constants";
import { useNavigate } from "react-router-dom";
export interface LoginDTO {
  email: string;
  password: string;
}

export const authenticate: any = createAsyncThunk(
  "authentication/login",
  async (data: LoginDTO, { dispatch, rejectWithValue }) => {
    try {
      if (
        await LOGIN_VALIDOS.some((elem) => {
          return elem.email === data.email && elem.password === data.password;
        })
      ) {
        // PERSISTENCIA DO LOGIN FEITA POR MEIO DO LOCALSTORAGE
        if (data.email) {
          localStorage.setItem("@user_email", data.email);

          return data;
        }
      } else {
        // CASO AS CREDÊNCIAIS ESTEJAM
        throw "Credênciais incorretas";
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
