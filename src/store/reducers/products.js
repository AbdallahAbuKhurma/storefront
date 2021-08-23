let initialState = {
  products: [
    {
      _id: Math.random(),
      name: 'TV',
      url: 'https://images.pexels.com/photos/6977377/pexels-photo-6977377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'electronics',
      price: 699.0,
      inStock: 3,
    },
    {
      _id: Math.random(),
      name: 'Mobile',
      url: 'https://images.pexels.com/photos/3571093/pexels-photo-3571093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'electronics',
      price: 999.0,
      inStock: 10,
    },
    {
      _id: Math.random(),
      name: 'Radio',
      url: 'https://images.pexels.com/photos/6368944/pexels-photo-6368944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'electronics',
      price: 99.0,
      inStock: 15,
    },
    {
      _id: Math.random(),
      name: 'Glasses',
      url: 'https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'clothing',
      price: 29.0,
      inStock: 19,
    },
    {
      _id: Math.random(),
      name: 'Socks',
      url: 'https://images.pexels.com/photos/5746050/pexels-photo-5746050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'clothing',
      price: 10.0,
      inStock: 34,
    },
    {
      _id: Math.random(),
      name: 'Strawberries',
      url: 'https://images.pexels.com/photos/3734845/pexels-photo-3734845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'food',
      price: 3.99,
      inStock: 299,
    },
    {
      _id: Math.random(),
      name: 'Eggs',
      url: 'https://images.pexels.com/photos/2959303/pexels-photo-2959303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'food',
      price: 2.99,
      inStock: 121,
    },
    {
      _id: Math.random(),
      name: 'Bread',
      url: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'food',
      price: 2.49,
      inStock: 50,
    },
  ],
  count: 0,
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'ACTIVE':
    let products = initialState.products.filter((product) =>
      product.category === payload ? product.category : null
    );
    return { products, count: state.count };
  case 'INCREMENT':
    const count = state.count + 1;
    return { products: state.products, count };
  default:
    return state;
  }
};

export default productsReducer;

