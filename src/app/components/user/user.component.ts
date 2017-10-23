import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // name = 'welcome to Angular';
  test: string;
  name: string;
  age: number;
  email: string;
  address: Address
  hobbies: string[];

  constructor() {
    console.log('constructor ran...')
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.test = "Test";
    this.name = "Angular";
    this.age = 30;
    this.address = {
      street: '50 Main Street',
      city:'Boston',
      state:'MA'
    }
    this.hobbies = ['Write code','Watch movies','Listen to music']
  }

  onClick(){
    this.name = "Dhaval Jardosh";
    this.hobbies.push("New Hobby")
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length;i++){
      if(this.hobbies[i]=== hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  refreshString(){
    console.log("Refresh Button");
    return false;
  }

}

interface Address{
  street: string,
  city: string,
  state: string
}
