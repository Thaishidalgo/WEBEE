import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventMusicPage } from './event-music.page';

const routes: Routes = [
  {
    path: '',
    component: EventMusicPage
  },
  {
    path: 'event-filters',
    loadChildren: () => import('./event-filters/event-filters.module').then( m => m.EventFiltersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventMusicPageRoutingModule {}
