import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User = {
    id: 101,
    firstName: "Alex",
    lastName: "Wu",
    age: 21,
    gender: "Male",
    groupJoint: "None",
    personalInterest: "Java"
  };

  constructor() {}

  ngOnInit() {}
}
