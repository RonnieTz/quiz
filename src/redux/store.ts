import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

export const store = configureStore({ reducer: { store: slice } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
