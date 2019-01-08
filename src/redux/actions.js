import { ADD_MATERIALS } from "./consts";
import { SUBTRACT_MATERIALS } from "./consts";
import { ADD_MATERIALS_FROM_CHECKBOX } from "./consts";
import { RESET } from "./consts";

export const addMaterials = resources => {
  return {
    type: ADD_MATERIALS,
    resources: resources
  };
};

export const addMaterialsFromCheckbox = resources => {
  return {
    type: ADD_MATERIALS_FROM_CHECKBOX,
    resources: resources
  };
};

export const subtractMaterials = resources => {
  return {
    type: SUBTRACT_MATERIALS,
    resources
  };
};

export const resetStore = () => {
  return {
    type: RESET
  };
};
