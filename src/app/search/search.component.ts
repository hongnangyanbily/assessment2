import { Component, OnInit } from "@angular/core";
import { GROUPS } from "./../mock-groups";
import { Group } from "./../group";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  Groups: Group[];
  i: Group[];
  searched: boolean;
  constructor() {
    this.Groups = GROUPS;
    this.searched = false;
  }

  ngOnInit() {}

  // match user input with group keyword
  // full name has to be typed and it is case-sensitive
  findGroup(g) {
    console.log(g);
    this.i = [];

    for (var a = 0; a < this.Groups.length; a++) {
      if (this.Groups[a].owner == g) {
        this.i.push(this.Groups[a]);
        this.searched = true;
      }
      if (this.Groups[a].id == g) {
        this.i.push(this.Groups[a]);
        this.searched = true;
      }
      if (this.Groups[a].name == g) {
        this.i.push(this.Groups[a]);
        this.searched = true;
      }
      if (this.Groups[a].size == g) {
        this.i.push(this.Groups[a]);
        this.searched = true;
      }
      if (this.Groups[a].location == g) {
        this.i.push(this.Groups[a]);
        this.searched = true;
      }
    }
    console.log("1");
  }
}
