import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import {citiesActions, IAddCityPayload, IUpdateOnePayload} from "./cities.actions";
import {ICityCoordinates} from "../../models/City";
import moment from 'moment';

export interface ICitiesReduxState {
  [id: string]: {
    id: string;
    name: string;
    coordinates: ICityCoordinates;
    startDate: string;
    endDate: string;
    color: string;
  }
}

const initialState: ICitiesReduxState = {};

export const citiesReducer: Reducer<ICitiesReduxState> = createReducer(initialState, {
  [citiesActions.add.type]: (state, action: PayloadAction<IAddCityPayload>) => {
    const { city } = action.payload;
    state[city.id] = city.normalize();

    return state;
  },
  [citiesActions.updateOne.type]: (state, action: PayloadAction<IUpdateOnePayload>) => {
    const { cityId, update } = action.payload;

    if (state[cityId]) {
      update.startDate = update.startDate ? moment(update.startDate).format() : state.startDate;
      update.endDate = update.endDate ? moment(update.endDate).format() : state.endDate;

      state[cityId] = {
        ...state[cityId],
        ...update
      };
    }

    return state;
  }
});
