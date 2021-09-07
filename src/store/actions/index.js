export const handleSignUp = (user) => {
  console.log(user, 'ssssssssssssssssss');
  return {
    type: 'SIGN_UP',
    payload: user,
  };
};

// get products action
export const getProductsAction = (responseData) => {
  return {
    type: 'GET_PRODUCTS',
    payload: responseData,
  };
};
