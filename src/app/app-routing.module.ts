import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { GroupsComponent } from "./groups/groups.component";
import { UserComponent } from "./user/user.component";
import { SearchComponent } from "./search/search.component";
import { GroupBoardComponent } from "./group-board/group-board.component";
import { LoginComponent } from "./login/login.component"

const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" }, // default route
  
  {
    path:"login",
    component:LoginComponent
  },

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
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  // configure the router at the application's root level

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
