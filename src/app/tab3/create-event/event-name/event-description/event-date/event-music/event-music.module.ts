import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventMusicPageRoutingModule } from './event-music-routing.module';

import { EventMusicPage } from './event-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventMusicPageRoutingModule
  ],
  declarations: [EventMusicPage]
})
export class EventMusicPageModule {}
