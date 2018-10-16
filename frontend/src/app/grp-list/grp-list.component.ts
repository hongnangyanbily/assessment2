import { Component, OnInit } from "@angular/core";
import { GroupService } from "../group.service";
import { Router } from "@angular/router";
import { Group } from "../grp.module";
import { LoginServiceService } from "../services/login-service.service";

@Component({
  selector: "app-grp-list",
  templateUrl: "./grp-list.component.html",
  styleUrls: ["./grp-list.component.css"]
})
export class GrpListComponent implements OnInit {
  groups: Group[];
  displayedColumns = ["title", "description", "category", "status", "actions"];
  loginStatus: boolean;
  constructor(
    private groupService: GroupService,
    private router: Router,
    private http: LoginServiceService
  ) {
    // Check log in status
    if (http.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit() {
    this.fetchGroups();
  }

  // Use call back function from group service to request data
  fetchGroups() {
    this.groupService.getGroups().subscribe((data: Group[]) => {
      this.groups = data;
      console.log(`Data requested...`);
    });
  }

  // Add event handlers for edit
  editGroup(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  // Add event handlers for edit
  deleteGroup(id) {
    this.groupService.deleteGroup(id).subscribe(() => {
      this.fetchGroups();
    });
  }
}
