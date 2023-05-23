import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public allEvents;
  
  constructor(private eventsService:EventsService) {}
  ngOnInit(){
    this.eventsService.getEvents().subscribe( res => {
      console.log(res);
      this.allEvents= res;
    });
  }
}
