import { SET_SHIP } from "../consts";

const initialState = {};

const shipReducer = (state = initialState, action) => {
  switch (action.type) {
    // case RESET:
    //   return {
    //     ...initialState
    //   };
    case SET_SHIP:
      return {
        ...action.ship
      };
    // case ADD_MATERIALS_FROM_CHECKBOX:
    //   return {
    //     ...addMatsFromCheckbox(resources, state)
    //   };
    // case SUBTRACT_MATERIALS:
    //   return {
    //     ...subtractMats(resources, state)
    //   };
    default:
      return state;
  }
};

export default shipReducer;
