import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsListComponent } from './views/breeds-list/breeds-list.component';
import { BreedsSearchComponent } from './views/breeds-search/breeds-search.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuardGuard } from '../auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'breeds-list',
        component: BreedsListComponent
      },
      {
        path: 'breeds-search',
        component: BreedsSearchComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [ AuthGuardGuard ]
      },
      {
        path: '**',
        redirectTo: 'breeds-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcoRoutingModule { }
