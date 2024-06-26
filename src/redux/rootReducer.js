import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";
import appReducer from "./slices/app"
import conversationReducer from "./slices/conversation";
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //white list []
  //blacklist
};
const rootReducer = combineReducers({
  app:appReducer ,
  auth: authReducer,
  conversation: conversationReducer
});
export { rootPersistConfig, rootReducer };
