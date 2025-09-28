import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authReducer } from "../reducers/authReducer";
import { nominaReducer } from "../reducers/nominaReducer.js";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  auth: authReducer,
  nomina: nominaReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
