import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import * as fromCities from '../store/cities.reducers';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
  host: {
    class: 'col-12 d-flex'
  }
})
export class CityListComponent implements OnInit {
  citiesState: Observable<fromCities.State>

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.citiesState = this.store.select('cities');
  }

  onView(cityName: string) {
    this.router.navigate([cityName], { relativeTo: this.route});
  }
}
