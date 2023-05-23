import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPeoplePage } from './group-people.page';

const routes: Routes = [
  {
    path: '',
    component: GroupPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPeoplePageRoutingModule {}
