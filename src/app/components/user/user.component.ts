import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // name = 'welcome to Angular';
  test: any[] = [1,4];

  constructor() {
    console.log('constructor ran...')
   }

  ngOnInit() {

  }

  refreshString(){

    console.log(this.test);
    return false;
  }

}
