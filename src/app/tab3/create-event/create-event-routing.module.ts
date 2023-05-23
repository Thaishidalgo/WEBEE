import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventPage } from './create-event.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEventPage
  },
  {
    path: 'event-name',
    loadChildren: () => import('./event-name/event-name.module').then( m => m.EventNamePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEventPageRoutingModule {}
