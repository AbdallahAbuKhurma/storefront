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
