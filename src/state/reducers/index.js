import { combineReducers } from "redux"; // React-redux import for combining reducers
import accountReducer from "./accountReducer";

const reducers = combineReducers({
  account: accountReducer
})

export default reducers