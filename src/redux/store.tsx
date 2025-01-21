import { configureStore, Store } from "@reduxjs/toolkit";
import { apiMiddleware, OutSpaceAPI } from "./api/api";
import { persistStore, persistReducer, PERSIST, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./feature/userSlice";

// redux-persistence configuration
const persistConfig = {
  key: "auth",
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store: Store = configureStore({
  reducer: {
    user: persistedReducer,
    [OutSpaceAPI.reducerPath]: OutSpaceAPI.reducer,
  },

  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, PERSIST],
      },
    }).concat(apiMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
