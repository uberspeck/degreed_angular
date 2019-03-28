import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { Error404Component } from './error404/error404.component';
import { FilterByDecadePipe } from './shared/filter-by-decade-pipe/filter-by-decade.pipe';
import { MovieDecadePickerComponent } from './movie-decade-picker/movie-decade-picker.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    Error404Component,
    FilterByDecadePipe,
    MovieDecadePickerComponent,
    DemoComponent
  ],
  imports: [
    CoreModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
