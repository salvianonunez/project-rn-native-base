import { combineReducers } from "redux";
import authReducer from './authReducer/auth';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;