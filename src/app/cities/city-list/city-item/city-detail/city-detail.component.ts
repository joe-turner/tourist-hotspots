import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { City } from '../../../city.model';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import * as fromApp from '../../../../store/app.reducers';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  host: {
    class: 'col-12 d-flex'
  }
})
export class CityDetailComponent implements OnInit {
  public city: City;

  constructor(private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    combineLatest(
      [
        this.route.params,
        this.store.pipe(select((state) => state.cities.cityList))])
      .subscribe(([params, cityList]) => {
        const cityName = params['cityName'];
        this.city = cityList[cityName];
      });
  }
}
