import { Component } from "@angular/core";
import { LoginServiceService } from "./services/login-service.service";
import { Router, Route } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "FindYourGrp";
  constructor(private http: LoginServiceService, private route: Router) {}
  logout() {
    this.http.loggedIn(false);
    this.route.navigate(["/"]);
    document.getElementById("out").style.visibility = "hidden";
  }
}
