import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./phonebook/phonebook-reducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: true,
});
export default store;
