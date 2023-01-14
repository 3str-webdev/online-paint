import { combineReducers } from "@reduxjs/toolkit";
import toolsReducer from "./toolsSlice";

const rootReducer = combineReducers({
  tools: toolsReducer,
});

export default rootReducer;
