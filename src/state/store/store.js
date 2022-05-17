import { createStore, applyMiddleware } from "redux"; // "applyMiddleware" added in this feature
import reducers from "../reducers/index";
import thunk from 'redux-thunk'; // Added in this feature 
 
const store = createStore(
  reducers, 
  {},
  applyMiddleware(thunk) //Added in this feature
)

export default store