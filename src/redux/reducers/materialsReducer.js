import {
  ADD_MATERIALS,
  SUBTRACT_MATERIALS,
  ADD_MATERIALS_FROM_CHECKBOX,
  RESET
} from "../consts";

import { addMats, addMatsFromCheckbox, subtractMats } from "../../util/math";
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
  let { resources, multiplier } = action;
  switch (action.type) {
    case RESET:
      return {
        ...initialState
      };
    case ADD_MATERIALS:
      return {
        ...addMats(resources, state, multiplier)
      };
    case ADD_MATERIALS_FROM_CHECKBOX:
      return {
        ...addMatsFromCheckbox(resources, state)
      };
    case SUBTRACT_MATERIALS:
      return {
        ...subtractMats(resources, state)
      };
    default:
      return state;
  }
};

export default materialsReducer;
