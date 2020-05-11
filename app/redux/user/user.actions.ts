import { ActionCreatorWithOptionalPayload, createAction } from '@reduxjs/toolkit';

export interface ISetActiveCityIdPayload {
  cityId: string;
}

const setActiveCity: ActionCreatorWithOptionalPayload<ISetActiveCityIdPayload> = createAction('USER::SET_ACTIVE_CITY');

export const userActions = {
  setActiveCity
};
