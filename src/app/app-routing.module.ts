import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";


const routes: Routes = [
  { path: 'cities',
    loadChildren: () => import('./cities/cities.module').then(m => m.CitiesModule) },
  { path: '', component: HomeComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
