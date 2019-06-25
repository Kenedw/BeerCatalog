import { createStore, combineReducers } from "redux";
import { BeerReducer } from "./BeerReducer";

const Reducers = combineReducers({
  BeerReducer: BeerReducer
});

export const Store = createStore(Reducers);
