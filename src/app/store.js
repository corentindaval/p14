import { configureStore } from '@reduxjs/toolkit';
import list_employer from '../assets/list_employer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from 'redux';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, list_employer)
export const store = configureStore({reducer:persistedReducer})
export const persistor = persistStore(store)

