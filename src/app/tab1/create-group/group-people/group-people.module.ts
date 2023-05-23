import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPeoplePageRoutingModule } from './group-people-routing.module';

import { GroupPeoplePage } from './group-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPeoplePageRoutingModule
  ],
  declarations: [GroupPeoplePage]
})
export class GroupPeoplePageModule {}
