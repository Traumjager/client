const initialState = {
    barberServices: [],
  };
  
  const servicesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
      case 'GET_SERVICES':
        return {
          barberServices: payload,
        };
      default:
        return state;
    }
  };
  
  export default servicesReducer;
  