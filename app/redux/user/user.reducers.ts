import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import {ISetActiveCityIdPayload, userActions} from "./user.actions";

export interface IUserReduxState {
  activeCityId: string;
  activeTripId: string;
}

const initialState: IUserReduxState = {
  activeCityId: null,
  activeTripId: null
};

export const userReducer: Reducer<IUserReduxState> = createReducer(initialState, {
  [userActions.setActiveCity.type]: (state, action: PayloadAction<ISetActiveCityIdPayload>) => {
    const { cityId } = action.payload;

    state.activeCityId = cityId;

    return state;
  }
});
