import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/login";
export const reducer = combineReducers({
  login: loginReducer,
});
