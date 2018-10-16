import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SearchComponent } from "./search/search.component";
import { GroupBoardComponent } from "./group-board/group-board.component";
import { LoginComponent } from "./login/login.component";
import { GrpListComponent } from "./grp-list/grp-list.component";
import { AddGrpComponent } from "./add-grp/add-grp.component";
import { EditGrpComponent } from "./edit-grp/edit-grp.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" }, // default route

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
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
  imports: [CommonModule, RouterModule.forRoot(routes)],
  // configure the router at the application's root level

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
