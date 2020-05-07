import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducers';
import * as CitiesActions from '../../../../store/cities.actions';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css'],
  host: {
    class: 'col-12 col-md-6 d-flex'
  }
})
export class CityEditComponent implements OnInit, OnDestroy {
  subscription: Subscription
  cityName: string;
  cityForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = combineLatest([
      this.route.params,
      this.store.select(state => state.cities.cityList)])
      .subscribe(values =>{
        this.cityName = values[0]['cityName'];
        const city = values[1][this.cityName];
        this.cityForm = new FormGroup({
          'name': new FormControl(city.name, Validators.required),
          'imageUrl': new FormControl(city.imageUrl, Validators.required),
          'shortDescription': new FormControl(city.shortDescription, Validators.required),
          'longDescription': new FormControl(city.longDescription, Validators.required)
        });
      });
  }

  onCancelEdit() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.store.dispatch(new CitiesActions.UpdateCity( { cityName: this.cityName, city: this.cityForm.value }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
