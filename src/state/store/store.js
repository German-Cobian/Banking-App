import { createStore } from "redux"; // React-redux import for store
import reducers from "./reducers/index"

const store = createStore(
  reducers, 
  {} // Default state
)

export default store