import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-opened',
  templateUrl: './event-opened.page.html',
  styleUrls: ['./event-opened.page.scss'],
})
export class EventOpenedPage implements OnInit {
  event: any;
  constructor(private eventsService: EventsService, private route: ActivatedRoute){ }

  ngOnInit() {
    this.eventsService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe((data)=>{
      console.log(data);
      this.event = data;
    });
  }

}



