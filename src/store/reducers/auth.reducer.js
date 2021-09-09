const initialState = {
  role: '',
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SIGN_UP':
      const user = payload.user ? payload.user : payload;
      const role = user?.shop_gender ? 'barber' : 'client';
      return {
        isLoggedIn: true,
        user: user,
        role: role,
      };
    case 'LOG_OUT':
      console.log("logged out");
      return state;
    default:
      return state;
  }
};

export default authReducer;
