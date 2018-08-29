import { Component, OnInit, Input } from "@angular/core";
import { Group } from "../group";

@Component({
  selector: "app-group-detail",
  templateUrl: "./group-detail.component.html",
  styleUrls: ["./group-detail.component.css"]
})
export class GroupDetailComponent implements OnInit {
  //Passing data from parent to child
  @Input()
  group: Group;

  constructor() {}

  ngOnInit() {}
}
