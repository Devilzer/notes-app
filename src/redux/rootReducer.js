import noteReducer from "./reducer/noteReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    note : noteReducer
});

const persistConfig ={
    key : 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;