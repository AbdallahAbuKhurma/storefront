import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categories from './reducers/categories';
import products from './reducers/products';
import cart from './reducers/cart';

const reducers = combineReducers({ categories, products, cart });
const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
