import { combineReducers } from "redux";
import authReducer from './authReducer/auth';
import pokemonReducer from "./pokemonReducer/pokemon";

const rootReducer = combineReducers({
  authReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;