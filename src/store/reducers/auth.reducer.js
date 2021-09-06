const initialState = {
  role: "",
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SIGN_UP":
      const role = payload?.shop_gender ? "barber" : "client";
      return {
        isLoggedIn: true,
        user: payload,
        role: role,
      };
    default:
      return state;
  }
};

export default authReducer;
