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
// get services action
export const getServicesAction = (responseData) => {
  return {
    type: 'GET_SERVICES',
    payload: responseData,
  };
}
