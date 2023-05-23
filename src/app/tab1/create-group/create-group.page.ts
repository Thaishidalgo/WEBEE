import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
   step = 0;
   group = {
name: ''
   };
  constructor() { }

  ngOnInit() {
  }
  nextStep(){
    this.step++;
    console.log(this.group)
  }

}
