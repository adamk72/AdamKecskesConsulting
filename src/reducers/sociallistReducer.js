import { GET_SOCIAL_INFO } from '../actions/actionTypes';

const sociallistReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SOCIAL_INFO:
      state = action.payload;
      return;
    default:
      return state;
  }
};

export default sociallistReducer;
