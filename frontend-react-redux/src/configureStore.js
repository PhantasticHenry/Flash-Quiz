import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //defaults to localStorage for web
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const persistConfig = {
  //configuration object for redux-persist
  key: "root",
  storage, //define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store); // used to create the persist store

export { store, persistor };
