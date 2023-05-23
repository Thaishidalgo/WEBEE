import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventNamePage } from './event-name.page';

const routes: Routes = [
  {
    path: '',
    component: EventNamePage
  },
  {
    path: 'event-description',
    loadChildren: () => import('./event-description/event-description.module').then( m => m.EventDescriptionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventNamePageRoutingModule {}
