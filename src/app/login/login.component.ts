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
  constructor(private login: LoginServiceService, private route: Router) {
    this.user = {
      username: "",
      password: ""
    };
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
          this.route.navigate(["user"]);
        } else if (data == null) {
          window.alert("username or password wrong");
        } else {
          window.alert("Please complete the form");
        }
      },
      error => {
        this.erroMsg = error;
        window.alert("please input correct username or password!!");
      }
    );
  }
}
interface user {
  username: string;
  password: string;
}
