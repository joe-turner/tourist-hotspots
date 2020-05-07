import { Component, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import { Store } from '@ngrx/store';
import { LoadCities } from './store/cities.actions';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  host: {
    class: "row d-flex"
  }
})
export class CitiesComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadCities());
  }
}
