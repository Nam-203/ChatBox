import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig,rootReducer } from "./rootReducer";
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: false,
      isImmutableCheck: false,
    }),
});
const  persistor = persistStore(store);
const {dispatch} = store;
const useSelector=useAppSelector;
const useDispatch =()=> useAppDispatch()
export {store,persistor,dispatch,useSelector,useDispatch}