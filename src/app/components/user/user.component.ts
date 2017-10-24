import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // name = 'welcome to Angular';
  test: any = "Input";

  constructor() {
    console.log('constructor ran...')
   }

  ngOnInit() {

    /*
    Take the input from the user and Generate the Anagram
    */

  }

  refreshString(){

    console.log(this.test);
    this.test = "";
    /* Here will be the logic to select next element in the Array of so, it will
    as expected
    And if "Refresh" click is equal to number of elements in array,
    It will again start from the first.

    Even making this Random is possible as well.
    */
    return false;
  }

}
