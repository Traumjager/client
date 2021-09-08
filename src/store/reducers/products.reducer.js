const initialState = {
  barberProducts: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  
  console.log(payload, 'payload products')
  
  switch (type) {
    case 'GET_PRODUCTS':
      
      return {
        barberProducts: payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
