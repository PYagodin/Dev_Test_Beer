import { configureStore, combineReducers } from "@reduxjs/toolkit";
import beerReducer from "./beerReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  favoriteBeers: favoriteReducer,
  beers: beerReducer,
});

export default configureStore({ reducer: rootReducer });
