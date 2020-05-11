import { combineReducers, configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {citiesReducer, ICitiesReduxState} from "./cities/cities.reducers";
import {IUserReduxState, userReducer} from "./user/user.reducers";
import {loadState, saveState} from "./localStorage";

export interface IReduxState {
  cities: ICitiesReduxState,
  user: IUserReduxState
}

const rootReducer = combineReducers({
  cities: citiesReducer,
  user: userReducer
});

const defaultMiddleWares = getDefaultMiddleware({
  // serializableCheck: {
  //   // ignoredActions: [citiesActions.add.type]
  // }
});

const middleware = [...defaultMiddleWares];

if (process.env.NODE_ENV !== 'production') {
  // Add development ONLY middleware here
  middleware.push(logger);
}
const persistedState = loadState();

export const GlobalStore: Store<IReduxState> = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  preloadedState: persistedState
});

GlobalStore.subscribe(() => {
  saveState(GlobalStore.getState());
});
