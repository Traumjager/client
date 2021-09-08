const initialState = {
  acceptedTicket: false,
};

const queueReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_QUEUES':
      return {
        acceptedTicket: payload,
      };
    default:
      return state;
  }
};

export default queueReducer;
