import { Component, OnInit } from "@angular/core";
import { GroupService } from "../group.service";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { Group } from "../grp.module";

@Component({
  selector: "app-grp-list",
  templateUrl: "./grp-list.component.html",
  styleUrls: ["./grp-list.component.css"]
})
export class GrpListComponent implements OnInit {
  groups: Group[];
  displayedColumns = ["title", "description", "category", "status", "actions"];

  constructor(private groupService: GroupService, private router: Router) {}

  ngOnInit() {
    this.fetchGroups();
  }

  fetchGroups() {
    this.groupService.getGroups().subscribe((data: Group[]) => {
      this.groups = data;
      console.log(`Data requested...`);
      console.log(this.groups);
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
