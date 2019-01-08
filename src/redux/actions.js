import { ADD_MATERIALS } from "./consts";
import { SUBTRACT_MATERIALS } from "./consts";
import { RESET } from "./consts";

export const addMaterials = resources => {
  return {
    type: ADD_MATERIALS,
    resources: resources
  };
};

export const subtractMaterials = resources => {
  console.log(resources);

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
