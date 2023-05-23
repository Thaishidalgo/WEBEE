import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGroupPage } from './create-group.page';

const routes: Routes = [
  {
    path: '',
    component: CreateGroupPage
  },
  {
    path: 'group-people',
    loadChildren: () => import('./group-people/group-people.module').then( m => m.GroupPeoplePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateGroupPageRoutingModule {}
