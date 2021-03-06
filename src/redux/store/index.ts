import { reducer } from "./../reducers/index";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export function configureAppStore() {
  //this is the storage
  const store = configureStore({
    reducer, //the defination of what you are storing
    middleware: [...getDefaultMiddleware({ serializableCheck: false })], //this wil
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
}
