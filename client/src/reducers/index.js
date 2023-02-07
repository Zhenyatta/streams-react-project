import { combineReducers } from "redux";

import authReducer from "./authReducer";
import streamReducer from "./streamReducers";

export default combineReducers({
  auth: authReducer,
  streams: streamReducer,
});
