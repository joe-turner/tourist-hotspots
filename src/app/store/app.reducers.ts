import * as fromCities from '../cities/store/cities.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  cities: fromCities.State
}

export const reducers: ActionReducerMap<AppState> = {
  cities: fromCities.citiesReducers
};
