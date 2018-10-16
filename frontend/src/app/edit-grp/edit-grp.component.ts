import { Component, OnInit } from "@angular/core";
import { GroupService } from "../group.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-edit-grp",
  templateUrl: "./edit-grp.component.html",
  styleUrls: ["./edit-grp.component.css"]
})
export class EditGrpComponent implements OnInit {
  id: String;
  group: any = {};
  updatedForm: FormGroup;

  constructor(
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.addForm();
  }

  // Update group information
  addForm() {
    this.updatedForm = this.fb.group({
      title: ["", Validators.required],
      description: "",
      status: "",
      category: ""
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Update object group's attribute value and send to backend
      this.id = params.id;
      this.groupService.getGroupById(this.id).subscribe(res => {
        this.group = res;
        this.updatedForm.get("title").setValue(this.group.title);
        this.updatedForm.get("description").setValue(this.group.description);
        this.updatedForm.get("category").setValue(this.group.category);
        this.updatedForm.get("status").setValue(this.group.status);
      });
    });
  }

  // Event handler for update detail of group
  updateGroup(title, description, category, status) {
    // Use snackbar to inform user
    this.groupService
      .updateGroup(this.id, title, description, category, status)
      .subscribe(() => {
        this.snackBar.open("Group information updated", "OK", {
          duration: 3000
        });
      });
  }
}
