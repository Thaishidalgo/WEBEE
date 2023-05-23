import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventFiltersPageRoutingModule } from './event-filters-routing.module';

import { EventFiltersPage } from './event-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventFiltersPageRoutingModule
  ],
  declarations: [EventFiltersPage]
})
export class EventFiltersPageModule {}
