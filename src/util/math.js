export const addMats = (mats, state) => {
  console.log(mats);

  for (const key in mats) {
    if (mats.hasOwnProperty(key)) {
      state[key] = state[key] + mats[key];
    }
  }
  return state;
};

export const addMatsFromCheckbox = (mats, state) => {
  console.log(mats);

  for (const key in mats) {
    if (mats.hasOwnProperty(key)) {
      state[key] = state[key] + mats[key];
    }
  }
  return state;
};

export const subtractMats = (mats, state) => {
  for (const key in mats) {
    if (mats.hasOwnProperty(key)) {
      state[key] = state[key] - mats[key];
    }
  }
  return state;
};

export const newShip = (mats, initialState) => {
  for (const key in mats) {
    if (mats.hasOwnProperty(key)) {
      initialState[key] = initialState[key] + mats[key];
    }
  }
  return initialState;
};
