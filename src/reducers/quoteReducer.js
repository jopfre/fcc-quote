import { FETCH_QUOTE } from '../actions/types';

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        quote: action.payload
      };
    default:
      return state;
  }
}
