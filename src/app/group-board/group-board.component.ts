import { Component, OnInit, Input } from "@angular/core";
import { Group } from "../group";

@Component({
  selector: "app-group-board",
  templateUrl: "./group-board.component.html",
  styleUrls: ["./group-board.component.css"]
})
export class GroupBoardComponent implements OnInit {
  @Input()
  group: Group;
  constructor() {}

  ngOnInit() {}
}
