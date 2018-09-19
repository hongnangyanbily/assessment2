import { Component, OnInit } from "@angular/core";
import { GROUPS } from "./../mock-groups";
import { Group } from "./../group";
import { LoginServiceService } from "../services/login-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  Groups: Group[];
  resultOfGroups: Group[];
  searched: boolean;
  loginStatus: boolean;
  constructor(private http: LoginServiceService, private route: Router) {
    //initialising....
    this.Groups = GROUPS;
    this.searched = false;
    if (http.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit() {}

  // match user input with group keyword
  // full name has to be typed and it is case-sensitive
  findGroup(keyword) {
    this.resultOfGroups = [];
    var str = keyword;

    //searching group by key word
    for (let a = 0; a < this.Groups.length; a++) {
      if (this.Groups[a].owner.includes(str)) {
        this.resultOfGroups.push(this.Groups[a]);
        this.searched = true;
        console.log("Search group by owner");
      }
      if (this.Groups[a].id == keyword) {
        this.resultOfGroups.push(this.Groups[a]);
        this.searched = true;
        console.log("Search group by id");
      }
      if (this.Groups[a].name.includes(keyword)) {
        this.resultOfGroups.push(this.Groups[a]);
        this.searched = true;
        console.log("Search group by name");
      }
      if (this.Groups[a].size == keyword) {
        this.resultOfGroups.push(this.Groups[a]);
        this.searched = true;
        console.log("Search group by size");
      }
      if (this.Groups[a].location.includes(keyword)) {
        this.resultOfGroups.push(this.Groups[a]);
        this.searched = true;
        console.log("Search group by location");
      }
    }
    //Set messege for no matching
    if (this.searched == false) {
      window.alert("Not found!");
    }
  }
  logout() {
    this.http.loggedIn(false);
    this.route.navigate(["/"]);
    document.getElementById("out").style.visibility = "hidden";
  }
}
