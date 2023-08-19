// rootReducer.js
import { combineReducers } from "redux";
import counterReducer from "./counterslice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
