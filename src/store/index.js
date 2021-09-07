import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/auth.reducer';
import productsReducer from './reducers/products.reducer';
import servicesReducer from './reducers/service.reducer';
const reducers = combineReducers({ authReducer, productsReducer,servicesReducer });
export default createStore(
  reducers
  //   composeWithDevTools(applyMiddleware(thunk))
);
