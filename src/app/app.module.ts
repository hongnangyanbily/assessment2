import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GroupsComponent } from "./groups/groups.component";
import { GroupDetailComponent } from "./group-detail/group-detail.component";
import { UserComponent } from "./user/user.component";
// import { AppRoutingModule } from ".//app-routing.module";
import { SearchComponent } from "./search/search.component";
import { GroupBoardComponent } from "./group-board/group-board.component";

import { GroupService } from "./group.service";
import { AddGrpComponent } from "./add-grp/add-grp.component";
import { EditGrpComponent } from "./edit-grp/edit-grp.component";
import { GrpListComponent } from "./grp-list/grp-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule
} from "@angular/material";

const routes: Routes = [
  { path: "", redirectTo: "groups", pathMatch: "full" }, // default route

  {
    path: "groups",
    component: GroupsComponent
  },

  {
    path: "user",
    component: UserComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "groupBoard",
    component: GroupBoardComponent
  },
  {
    path: "grpList",
    component: GrpListComponent
  },
  {
    path: "add",
    component: AddGrpComponent
  },
  {
    path: "edit/:id",
    component: EditGrpComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    GroupDetailComponent,
    UserComponent,
    SearchComponent,
    GroupBoardComponent,
    AddGrpComponent,
    EditGrpComponent,
    GrpListComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
