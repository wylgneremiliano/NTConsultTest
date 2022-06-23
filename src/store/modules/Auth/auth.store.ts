import { createSlice } from "@reduxjs/toolkit";

import { authenticate } from "./async-truncks/authenticate";
import * as reducers from "./reducers";

const auth = createSlice({
  name: "auth",
  initialState: {
    session: false,
    expiresAt: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state) => {
      state.session = true;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.error = true;
    });
  },
});
export const { reducer } = auth;
