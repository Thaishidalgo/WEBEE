import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventFiltersPage } from './event-filters.page';

const routes: Routes = [
  {
    path: '',
    component: EventFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventFiltersPageRoutingModule {}
