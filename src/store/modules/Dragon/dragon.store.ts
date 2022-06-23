import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listDragons } from "./async-trunks/list-dragons";
import { detailsDragon } from "./async-trunks/details-dragon";
import { editDragon } from "./async-trunks/edit-dragon";
import { deleteDragon } from "./async-trunks/delete-dragon";
import { addDragon } from "./async-trunks/add-dragon";
import { isAfter } from "date-fns";

interface IDragons {
  createdAt: Date;
  name: string;
  type: string;
  histories: Array<string | any>;
  id: number;
  requestId?: string;
  signal?: Object;
}

interface IState {
  dragon?: IDragons | any;
  dragons?: IDragons[];
}

export const initialState: IState = {};

const dragon = createSlice({
  name: "dragon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      listDragons.fulfilled,
      (state, action: PayloadAction<IDragons[] | any>) => {
        state.dragons = action.payload.sort((a: IDragons, b: IDragons) => {
          if (isAfter(a.createdAt, b.createdAt)) {
            return 1;
          }
          return -1;
        });
      }
    );
    builder.addCase(
      detailsDragon.fulfilled,
      (state, action: PayloadAction<IDragons | any>) => {
        state.dragon = action.payload;
      }
    );
    builder.addCase(
      addDragon.fulfilled,
      (state, action: PayloadAction<IDragons | any>) => {
        state.dragons?.push(action.payload);
        if (state.dragons) {
          state.dragons = state.dragons.sort((a: IDragons, b: IDragons) => {
            if (isAfter(a.createdAt, b.createdAt)) {
              return 1;
            }
            return -1;
          });
        }
      }
    );
    builder.addCase(
      editDragon.fulfilled,
      (state, action: PayloadAction<IDragons | any>) => {
        state.dragons = state.dragons?.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.dragon = action.payload;
      }
    );
    builder.addCase(
      deleteDragon.fulfilled,
      (state, action: PayloadAction<IDragons | any>) => {
        state.dragons = state.dragons?.filter(
          (item) => item.id !== action.payload.id
        );
      }
    );
  },
});

export const { reducer } = dragon;
