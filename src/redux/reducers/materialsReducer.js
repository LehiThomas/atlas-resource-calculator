import { ADD_MATERIALS } from "../consts";
import { SUBTRACT_MATERIALS } from "../consts";

const initialState = {
  wood: 0,
  fiber: 0,
  thatch: 0,
  stone: 0,
  metal: 0,
  coal: 0,
  hide: 0
};

const materialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATERIALS:
      return {
        ...state
      };
    case SUBTRACT_MATERIALS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default materialsReducer;
