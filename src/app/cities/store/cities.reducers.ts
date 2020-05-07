import { City } from "../city.model";
import * as CitiesActions from './cities.actions';

export interface State {
  cityList: { [cityName: string]: City };
  areLoaded: boolean;
}

const initialState: State  = {
  cityList: {},
  areLoaded: false
};

export function citiesReducers(state = initialState, action: CitiesActions.CitiesActions) {
  switch (action.type) {
    case CitiesActions.SET_CITIES:
      return {
        ...state,
        cityList: {...action.payload},
        areLoaded: true
      };

    case CitiesActions.SET_CITY:
      const cityName = action.payload.cityName;
      const city = state.cityList[cityName];

      const modifiedCity  = {
        ...city,
        ...action.payload.city
      };

      const cityList = {...state.cityList};
      cityList[cityName] = modifiedCity;

      return {
        ...state,
        cityList: cityList
      };

    default:
      return state;
  }
}

