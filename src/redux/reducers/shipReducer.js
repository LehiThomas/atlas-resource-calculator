import { SET_SHIP, UPDATE_GUNPORTS } from "../consts";

const initialState = {};

const shipReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIP:
      return {
        ...action.ship
      };
    case UPDATE_GUNPORTS:
      return {
        ...state,
        availableGunports: action.gunports
      };
    default:
      return state;
  }
};

export default shipReducer;
