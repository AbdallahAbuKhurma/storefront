import superagent from 'superagent';

/**
 * const API = 'https://api-js401.herokuapp.com/api/v1/products'; this is the given API
 * I used my own API and thats becuase the given api dont have any image url
 */

const API = 'https://abdallah-api-server.herokuapp.com/api/v1/store';

export const getRemoteData = () => {
  return async (dispatch) => {
    await superagent.get(API).then((res) => {
      dispatch(getProducts(res.body));
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const getProducts = (products) => {
  return {
    type: 'GET',
    payload: products.data,
  };
};

export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product,
  };
};

export const decrement = (product) => {
  return {
    type: 'DECREMENT',
    payload: product,
  };
};

export const show = (value) => {
  return {
    type: 'SHOW_CART',
    payload: value,
  };
};
