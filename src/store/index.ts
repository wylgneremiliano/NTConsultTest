import { configureStore } from "@reduxjs/toolkit";
import { reducer as dragonReducer } from "./modules/Dragon/dragon.reducer";
// ...

const store = configureStore({
  reducer: {
    dragon: dragonReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
