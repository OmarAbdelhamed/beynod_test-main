import { configureStore } from "@reduxjs/toolkit";
import localizationReducer from "./Localization";
import authReducer from "./Authantication";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: "root",
	version: 1,
	storage:AsyncStorage,
};

const RootReducers = combineReducers({
	currentLocal: localizationReducer,
	auth: authReducer,

	
});

const persistedReducer = persistReducer(persistConfig, RootReducers);

export default configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});