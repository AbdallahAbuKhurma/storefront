export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
