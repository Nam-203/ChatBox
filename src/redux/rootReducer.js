import { combineReducers } from "redux";
import  appReducer  from "./slices/app";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //white list []
  //blacklist
};
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});
export { rootPersistConfig, rootReducer };
