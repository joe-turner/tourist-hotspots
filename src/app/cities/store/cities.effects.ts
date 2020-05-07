import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CitiesActions from './cities.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { City } from '../city.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';

@Injectable()
export class CitiesEffects {
  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private router: Router) {
  }

  @Effect()
  loadCities = this.actions$.pipe(
    ofType(CitiesActions.LOAD_CITIES),
    switchMap(() => {
      return this.httpClient.get<{[cityName: string]: City}>('https://tourist-hotspots.firebaseio.com/cityList.json')
    }),
    map((cities: {[cityName: string]: City}) => {
      return {
        type: CitiesActions.SET_CITIES,
        payload: cities
      };
    })
  );

  @Effect()
  updateCity = this.actions$.pipe(
    ofType(CitiesActions.UPDATE_CITY),
    map((action:CitiesActions.UpdateCity) => {
      return action.payload;
    }),
    switchMap((payload: { cityName: string, city: City }) => {
      return combineLatest([of(payload),
        this.httpClient.patch(
        'https://tourist-hotspots.firebaseio.com/cityList.json',
        {
            [payload.cityName]: payload.city
        })]);
    }),
    map(([payload]) => {
      return {
        type: CitiesActions.SET_CITY,
        payload: payload
      };
    }),
    tap((action: CitiesActions.SetCity) => {
      return this.router.navigate(['/cities', action.payload.cityName]);
    })
  );
}
