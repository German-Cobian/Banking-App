import { createStore, applyMiddleware} from "redux"; // React-redux import for store
import reducers from "../reducers/index"
import thunk from "redux-thunk"

const store = createStore(
  reducers, 
  {}, // Default state
  applyMiddleware(thunk)
)

export default store