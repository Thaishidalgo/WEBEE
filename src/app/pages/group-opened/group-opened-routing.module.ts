import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupOpenedPage } from './group-opened.page';

const routes: Routes = [
  {
    path: '',
    component: GroupOpenedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupOpenedPageRoutingModule {}
