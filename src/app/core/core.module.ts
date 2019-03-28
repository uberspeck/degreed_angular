import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmdbApiService } from './omdb-api/omdb-api.service';
import { OmdbDataService } from './omdb-data/omdb-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        OmdbApiService,
        OmdbDataService,
      ]
    };
  }
}
