import { Action, configureStore, AsyncThunkAction } from "@reduxjs/toolkit";

import { reducer as dragon } from "./modules/Dragon/dragon.store";
import { reducer as auth } from "./modules/Auth/auth.store";

import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    dragon,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
