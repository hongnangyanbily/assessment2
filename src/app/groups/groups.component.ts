import { Component, OnInit } from "@angular/core";
import { Group } from "../group";
import { GROUPS } from "../mock-groups";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.css"]
})
export class GroupsComponent implements OnInit {
  
  groups = GROUPS;
  selectedGroup: Group;

  constructor() {}

  ngOnInit() {}

  //Get the group that user selected.
  onSelect(group: Group): void {
    //Pass the value of group to selectedGroup to operate.
    this.selectedGroup = group;
  }
}
