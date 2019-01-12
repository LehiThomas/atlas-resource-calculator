import {
  ADD_MATERIALS,
  SET_SHIP,
  SUBTRACT_MATERIALS,
  ADD_MATERIALS_FROM_CHECKBOX,
  RESET,
  UPDATE_GUNPORTS
} from "./consts";

export const addMaterials = (resources, multiplier = 1) => {
  return {
    type: ADD_MATERIALS,
    resources: resources,
    multiplier: multiplier
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

export const setShip = ship => {
  return {
    type: SET_SHIP,
    ship
  };
};

export const updateAvailableGunports = gunports => {
  return {
    type: UPDATE_GUNPORTS,
    gunports: parseInt(gunports)
  };
};
