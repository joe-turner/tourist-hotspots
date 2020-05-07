import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitiesComponent } from "./cities.component";
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-list/city-item/city-detail/city-detail.component';
import { CityEditComponent } from './city-list/city-item/city-detail/city-edit/city-edit.component';

const citiesRoutes: Routes = [
  {
    path: '',
    component: CitiesComponent,
    children: [
      { path: '', component: CityListComponent },
      { path: ':cityName', component: CityDetailComponent },
      { path: ':cityName/edit', component: CityEditComponent }
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(citiesRoutes)
  ],
  exports: [RouterModule]
})
export class CitiesRoutingModule {}
