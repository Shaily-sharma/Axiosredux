import { createStore,applyMiddleware } from "redux";

import roota from "../reducer/main"
import ReduxThunk from "redux-thunk"

const store=createStore(roota,applyMiddleware(ReduxThunk))

export default store;