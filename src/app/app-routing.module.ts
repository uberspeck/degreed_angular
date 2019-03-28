import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './error404/error404.component';
import { MoviesResolverService } from './movies-resolver/movies-resolver.service';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo?s=batman',
    pathMatch: 'full'
  }, {
    path: 'demo',
    component: DemoComponent,
    resolve: {
      movieData: MoviesResolverService
    }
  }, {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
