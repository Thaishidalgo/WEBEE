import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDescriptionPage } from './event-description.page';

const routes: Routes = [
  {
    path: '',
    component: EventDescriptionPage
  },
  {
    path: 'event-date',
    loadChildren: () => import('./event-date/event-date.module').then( m => m.EventDatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDescriptionPageRoutingModule {}
