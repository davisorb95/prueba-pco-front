import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { PcoRoutingModule } from './pco-routing.module';
import { BreedsListComponent } from './views/breeds-list/breeds-list.component';
import { BreedsService } from './services/breeds.service';
import { NgbCarouselModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BreedsSearchComponent } from './views/breeds-search/breeds-search.component';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    BreedsListComponent,
    BreedsSearchComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PcoRoutingModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbCarouselModule
  ],
  providers: [
    BreedsService
  ]
})
export class PcoModule { }
