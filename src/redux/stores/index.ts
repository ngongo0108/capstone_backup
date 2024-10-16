// store of redux with toolkit

import { createStore } from "redux";

import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root ", // key is required
  storage: storage, // storage is now required
  whitelist: ["auth"], // only auth will be persisted
};
const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
// Create a persisted reducer using redux-persist

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
