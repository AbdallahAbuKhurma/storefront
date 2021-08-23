let initialState = {
  categories: [
    {
      name: 'food',
      display_name: 'Food',
      description: 'Good food = Good mood',
    },
    {
      name: 'clothing',
      display_name: 'Clothing',
      description: 'You are what you wear',
    },
    {
      name: 'electronics',
      display_name: 'Electronics',
      description: 'Making your life easier, one volt at a time',
    },
  ],
  activeCategorie: {},
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'ACTIVE':
    let activeCategorie = initialState.categories.find(
      (category) => category.name === payload
    );
    return { categories: initialState.categories, activeCategorie };
  default:
    return state;
  }
};

export default categoriesReducer;
