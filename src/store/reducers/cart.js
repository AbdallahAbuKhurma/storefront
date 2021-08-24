let initialState = {
  cart: [],
  count: 0,
  show: false,
  display: [],
};

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {

  case 'INCREMENT':
    let newList = [...state.cart, payload];
    return {
      cart: newList,
      display: displayList(newList),
      count: state.count + 1,
      show: state.show,
    };

  case 'DECREMENT':
    const newProducts = state.cart.filter(
      (product) => product.name !== payload.name
    );
    return {
      cart: newProducts,
      display: displayList(newProducts),
      count: state.count - payload.count -1,
      show: true,
    };

  case 'SHOW_CART':
    return {
      cart: state.cart,
      display: state.display,
      count: state.count,
      show: payload,
    };
  default:
    return state;
  }
};

/*
displayList function => used in order to display the products added to the cart
product details: id, name, url, category, price, inStoke, count
*/

function displayList(array){
  const map = new Map();
  for(const product of array){
    if(!map.has(product._id)){
      map.set(product._id, {
        id: product._id,
        name: product.name,
        url: product.url,
        category: product.category,
        price: product.price,
        inStock: product.inStock,
        count: product.count,
      });
    } else {
      map.delete(product._id);
      map.set(product._id, {
        id: product._id,
        name: product.name,
        url: product.url,
        category: product.category,
        price: product.price,
        inStock: product.inStock,
        count: product.count,
      });
    }
  }
  return Array.from(map.values());
}

export default cartReducer;
