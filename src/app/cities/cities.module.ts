import { NgModule } from "@angular/core";
import { CitiesRoutingModule } from "./cities-routing.module";
import { CitiesComponent } from './cities.component';
import { CityListComponent } from './city-list/city-list.component';
import { CommonModule } from '@angular/common';
import { CityItemComponent } from './city-list/city-item/city-item.component';
import { CityDetailComponent } from './city-list/city-item/city-detail/city-detail.component';
import { CityEditComponent } from './city-list/city-item/city-detail/city-edit/city-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CitiesComponent, CityListComponent, CityItemComponent, CityDetailComponent, CityEditComponent],
  imports: [CitiesRoutingModule, CommonModule, ReactiveFormsModule]
})
export class CitiesModule {}
