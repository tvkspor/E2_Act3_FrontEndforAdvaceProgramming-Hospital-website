import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from './slides/productSlide'
import userReducer from './slides/userSlide'
import orderReducer from './slides/orderSlide'
import doctorReducer from './slides/doctorSlide'
import itemReducer from './slides/itemSlide'
import medicineReducer from './slides/medicineSlide'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['product','user','doctor','medicine']
}

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  order: orderReducer,
  doctor: doctorReducer,
  item: itemReducer,
  medicine: medicineReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)