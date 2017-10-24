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
    //https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript
    //Will be trying to implement this logic using 2 way binding

    /*
    Take the input from the user from
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
