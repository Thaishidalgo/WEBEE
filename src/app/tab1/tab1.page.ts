import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from '../services/groups.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public groups;

  constructor(private authService: AuthenticationService, private router: Router, private groupService: GroupsService) {}
 ngOnInit(){
  this.groupService.getGroups().subscribe((data)=>{
    console.log(data);
    this.groups = data;
  });
 }
 
}
