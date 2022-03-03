import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cartReducer from "../features/reducers/cartReducer";
const initialState = {};
const middleware = [thunk];
const store = createStore(
  cartReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;