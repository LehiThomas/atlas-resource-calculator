import { ADD_MATERIALS } from "./consts";
import { SUBTRACT_MATERIALS } from "./consts";

export const addMaterials = resources => {
  return {
    type: ADD_MATERIALS,
    resources
  };
};

export const subtractMaterials = resources => {
  return {
    type: SUBTRACT_MATERIALS,
    resources
  };
};
