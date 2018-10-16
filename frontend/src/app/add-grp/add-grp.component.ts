import { Component, OnInit } from "@angular/core";
import { GroupService } from "../group.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-grp",
  templateUrl: "./add-grp.component.html",
  styleUrls: ["./add-grp.component.css"]
})
export class AddGrpComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private groupService: GroupService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.addForm = this.fb.group({
      title: ["", Validators.required],
      description: "",
      status: "",
      category: ""
    });
  }

  // Add group to backend via service
  addGroup(title, description, category, status) {
    
    // Call from group service add method and navigate back to list
    this.groupService
      .addGroup(title, description, category, status)
      .subscribe(() => {
        this.router.navigate(["/grpList"]);
      });
  }

  ngOnInit() {}
}
