import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  public allGroups;
  constructor(private http: HttpClient) { }

  getGroups() {
    return this.allGroups = this.http.get(environment.wordpress.url_api + 'group');
  }
  getOne(id) {
    return this.allGroups = this.http.get(environment.wordpress.url_api + 'group/' + id);
  }
  create(group, token): Observable<any> {
    return this.http.post(environment.wordpress.url_api + 'group', group, { headers: { Authorization: 'Bearer ' + token}});
  }

}
