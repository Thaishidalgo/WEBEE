import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckEmailPage } from './check-email.page';

const routes: Routes = [
  {
    path: '',
    component: CheckEmailPage
  },
  {
    path: 'create-password',
    loadChildren: () => import('./create-password/create-password.module').then( m => m.CreatePasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckEmailPageRoutingModule {}
