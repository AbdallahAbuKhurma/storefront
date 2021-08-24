let initialState = {
  products: [
    {
      _id: Math.random(),
      name: 'TV',
      url: 'https://images.pexels.com/photos/6977377/pexels-photo-6977377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'electronics',
      price: 699.99,
      inStock: 3,
      count: 0,
    },
    {
      _id: Math.random(),
      name: 'Mobile',
      url: 'https://images.pexels.com/photos/3571093/pexels-photo-3571093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'electronics',
      price: 999.99,
      inStock: 10,
      count: 0,
    },
    {
      _id: Math.random(),
      name: 'Radio',
      url: 'https://images.pexels.com/photos/6368944/pexels-photo-6368944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'electronics',
      price: 99.99,
      inStock: 15,
      count: 0,
    },

    {
      _id: Math.random(),
      name: 'Strawberries',
      url: 'https://images.pexels.com/photos/3734845/pexels-photo-3734845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'food',
      price: 3.99,
      inStock: 299,
      count: 0,
    },
    {
      _id: Math.random(),
      name: 'Eggs',
      url: 'https://images.pexels.com/photos/2959303/pexels-photo-2959303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'food',
      price: 2.99,
      inStock: 121,
      count: 0,
    },
    {
      _id: Math.random(),
      name: 'Bread',
      url: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'food',
      price: 2.49,
      inStock: 50,
      count: 0,
    },

    {
      _id: Math.random(),
      name: 'Glasses',
      url: 'https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      category: 'clothing',
      price: 29.49,
      inStock: 19,
      count: 0,
    },
    {
      _id: Math.random(),
      name: 'Socks',
      url: 'https://images.pexels.com/photos/5746050/pexels-photo-5746050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'clothing',
      price: 10.49,
      inStock: 34,
      count: 0,
    },
  ],
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
    let productList = state.products.map((product) =>
      payload.name === product.name
        ? {
          _id: product._id,
          name: product.name,
          url: product.url,
          category: product.category,
          price: product.price,
          inStock: product.inStock - 1,
          count: product.count + 1,
        }
        : product
    );
    return { products: productList };

  case 'DECREMENT':
    let newProducts = state.products.map((product) =>
      payload.name === product.name
        ? {
          _id: product._id,
          name: product.name,
          url: product.url,
          category: product.category,
          price: product.price,
          inStock: product.inStock + payload.count + 1,
          count: product.count - payload.count - 1,
        }
        : product
    );
    return { products: newProducts };
  default:
    return state;
  }
};

export default productsReducer;

