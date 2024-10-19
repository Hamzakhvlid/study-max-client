import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice/sidebarSlice";


const allReducers = combineReducers({
  sidebar: sidebarReducer,
});
export const store = configureStore({
  devTools: true,
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;