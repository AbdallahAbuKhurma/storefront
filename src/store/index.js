import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './reducers/categories';
import products from './reducers/products';

const reducers = combineReducers({ categories, products });
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
