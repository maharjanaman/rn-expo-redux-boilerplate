import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";

import reducers from "./Reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "profile"]
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

const middlewares = [promiseMiddleware(), thunk];

// eslint-disable-next-line
if (__DEV__) {
  middlewares.push(createLogger());
}

export default () => {
  const store = createStore(persistedReducer, undefined, compose(applyMiddleware(...middlewares)));
  const persistor = persistStore(store);
  return { store, persistor };
};
