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
    if (http.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }

  ngOnInit() {
    this.fetchGroups();
  }

  fetchGroups() {
    this.groupService.getGroups().subscribe((data: Group[]) => {
      this.groups = data;
      console.log(`Data requested...`);
    });
  }

  // Add event handlers for edit and delete
  editGroup(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteGroup(id) {
    this.groupService.deleteGroup(id).subscribe(() => {
      this.fetchGroups();
    });
  }
}
