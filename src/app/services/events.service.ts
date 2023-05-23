import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public allEvents;
  constructor(private http: HttpClient) { }

  getEvents() {
    return this.allEvents = this.http.get(environment.wordpress.url_api + 'esdeveniments');
  }

  getEventsOfChallenge(challengeId){
    return this.allEvents.filter(e=> e.challenge ===challengeId);
  }
  getEventsOfUser(userId){
    return this.allEvents.filter(e=> e.user ===userId);
  }
  getEvent(eventId){
    return this.allEvents.find(e=> e.id ===eventId);
  }
  create(event, token): Observable<any> {
    return this.http.post(environment.wordpress.url_api + 'event', event, { headers: { Authorization: 'Bearer ' + token}});
  }
}
