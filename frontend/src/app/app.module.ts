import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";
import { AppRoutingModule } from ".//app-routing.module";
import { SearchComponent } from "./search/search.component";
import { LoginComponent } from "./login/login.component";
import { AddGrpComponent } from "./add-grp/add-grp.component";
import { EditGrpComponent } from "./edit-grp/edit-grp.component";
import { GrpListComponent } from "./grp-list/grp-list.component";
import { LoginServiceService } from "./services/login-service.service";
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
import { GroupService } from "./group.service";
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    LoginComponent,
    AddGrpComponent,
    EditGrpComponent,
    GrpListComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
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
  providers: [LoginServiceService, HttpModule, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
