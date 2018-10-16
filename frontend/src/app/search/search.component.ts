import { Component, OnInit } from "@angular/core";
import { Group } from "./../grp.module";
import { LoginServiceService } from "../services/login-service.service";
import { Router } from "@angular/router";
import { GroupService } from "../group.service";

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
  constructor(
    private groupService: GroupService,
    private http: LoginServiceService,
    private route: Router
  ) {
    // Initialising....
    this.Groups = [];
    this.searched = false;
    if (http.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit() {}

  findGroup(keyword) {
    var str = keyword;
    this.resultOfGroups = [];

    // Search group by key word
    this.groupService.getGroups().subscribe(groups => {
      this.Groups = groups;
      console.log(this.Groups);

      // Retrive data in existing groups
      // Match user input with group keyword
      for (let a = 0; a < this.Groups.length; a++) {
        if (this.Groups[a].title.includes(keyword)) {
          console.log(keyword);
          this.resultOfGroups.push(this.Groups[a]);
          this.searched = true;
          console.log("Search group by title");
        }
      }

      // Message for invalid message
      if (this.searched == false) {
        window.alert("Not found!");
      }
    });
  }

  // Log out
  logout() {
    this.http.loggedIn(false);
    this.route.navigate(["/"]);
    document.getElementById("out").style.visibility = "hidden";
  }
}
