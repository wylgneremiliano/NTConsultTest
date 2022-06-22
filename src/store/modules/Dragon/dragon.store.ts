import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listDragons } from "./async-trunks/list-dragons";

interface IDragons {
  createdAt: Date;
  name: string;
  type: string;
  histories: Array<string | any>;
  id: number;
}
const dragon = createSlice({
  name: "dragon",
  initialState: {
    dragons: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      listDragons.fulfilled,
      (state, action: PayloadAction<IDragons | any>) => {
        state.dragons = action.payload;
      }
    );
  },
});

export const { reducer } = dragon;
