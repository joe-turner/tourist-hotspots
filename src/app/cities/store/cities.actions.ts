import { Action } from '@ngrx/store';
import { City } from '../city.model';

export const LOAD_CITIES = 'LOAD_CITIES';
export const SET_CITIES = 'SET_CITIES';
export const UPDATE_CITY = 'UPDATE_CITY';
export const SET_CITY = 'SET_CITY';

export class LoadCities implements Action {
  readonly type = LOAD_CITIES;
}

export class SetCities implements Action {
  readonly type = SET_CITIES;

  constructor(public payload: { [cityName: string]: City }) {
  }
}

export class UpdateCity implements Action {
  readonly type = UPDATE_CITY;

  constructor(public payload: { cityName: string, city: City }) {}
}

export class SetCity implements Action {
  readonly type = SET_CITY;

  constructor(public payload: { cityName: string, city: City }) {}
}

export type CitiesActions = LoadCities | SetCities | UpdateCity | SetCity;
