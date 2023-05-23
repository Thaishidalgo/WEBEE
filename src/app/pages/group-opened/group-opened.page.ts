import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-group-opened',
  templateUrl: './group-opened.page.html',
  styleUrls: ['./group-opened.page.scss'],
})
export class GroupOpenedPage implements OnInit {
grup:any;
  constructor( private route:ActivatedRoute, private groupService:GroupsService) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.groupService.getOne(this.route.snapshot.paramMap.get('id')).subscribe((data)=>{
      console.log(data);
      this.grup = data;
    })
  }


}
