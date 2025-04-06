import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));