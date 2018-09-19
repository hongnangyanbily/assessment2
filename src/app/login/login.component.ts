import { Component, OnInit } from "@angular/core";
import { LoginServiceService } from "../services/login-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: user;
  erroMsg;
  loginStatus: boolean;
  constructor(private login: LoginServiceService, private route: Router) {
    this.user = {
      username: "",
      password: ""
    };
    if (login.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }
  ngOnInit() {}

  log(event) {
    event.preventDefault();
    const target = event.target;
    this.user.username = target.querySelector("#username").value;
    this.user.password = target.querySelector("#password").value;
    this.login.usrLogin(this.user).subscribe(
      data => {
        if (data != null) {
          console.log("successfully!");
          console.log(data);
          this.route.navigate(["user"]);
        }
      },
      error => {
        this.erroMsg = error;
        console.log(error);
        window.alert("please input correct username or password!!");
      }
    );
    this.login.loggedIn(true);
  }
}
interface user {
  username: string;
  password: string;
}
