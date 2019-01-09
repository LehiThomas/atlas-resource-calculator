import { combineReducers } from "redux";

import materialsReducer from "./materialsReducer";
import shipReducer from "./shipReducer";

export default combineReducers({
  materialsReducer,
  shipReducer
});
