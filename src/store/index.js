import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/auth.reducer";

const reducers = combineReducers({authReducer});
export default createStore(
  reducers
//   composeWithDevTools(applyMiddleware(thunk))
);
