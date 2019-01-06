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
    default:
      return state;
  }
};

export default materialsReducer;
