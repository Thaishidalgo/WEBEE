import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupOpenedPageRoutingModule } from './group-opened-routing.module';

import { GroupOpenedPage } from './group-opened.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupOpenedPageRoutingModule
  ],
  declarations: [GroupOpenedPage]
})
export class GroupOpenedPageModule {}
