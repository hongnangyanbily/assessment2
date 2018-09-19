import { Component, OnInit } from "@angular/core";
import { Group } from "../group";
import { GROUPS } from "../mock-groups";
import { LoginServiceService } from "../services/login-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.css"]
})
export class GroupsComponent implements OnInit {
  groups = GROUPS;
  selectedGroup: Group;
  loginStatus: boolean;
  constructor(private http: LoginServiceService, private route: Router) {
    if (http.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit() {}

  //Get the group that user selected.
  onSelect(group: Group): void {
    //Pass the value of group to selectedGroup to operate.
    this.selectedGroup = group;
  }
  logout() {
    this.http.loggedIn(false);
    this.route.navigate(["/"]);
    document.getElementById("out").style.visibility = "hidden";
  }
}
