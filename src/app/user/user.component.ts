import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
   
  }
  user: User;

  constructor() {
    //build raw data
    this.user ={
    id: 101,
    firstName: "Alex",
    lastName: "Wu",
    age: 21,
    gender: "Male",
    groupJoint: "None",
    personalInterest: "Java"
    }
  }
}
interface User{
    //define a new schema
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    groupJoint: string;
    personalInterest: string;
}
