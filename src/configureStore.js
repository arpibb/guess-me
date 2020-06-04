import { createStore } from "redux";
import middleware from './middleware'
import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";

export default function congifureStore(persistedState){
  const store = createStore(
    rootReducer,
    persistedState,
    middleware
  );
  store.dispatch(verifyAuth());
  return store;
}