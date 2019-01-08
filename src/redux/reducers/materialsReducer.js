import { ADD_MATERIALS } from "../consts";
import { SUBTRACT_MATERIALS } from "../consts";
import { RESET } from "../consts";

import { addMats, newShip, subtractMats } from "../../util/math";
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
  let resources = action.resources;
  switch (action.type) {
    case ADD_MATERIALS:
      return {
        ...addMats(resources, initialState)
      };
    case SUBTRACT_MATERIALS:
      return {
        ...subtractMats(resources, state)
      };
    case RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default materialsReducer;
