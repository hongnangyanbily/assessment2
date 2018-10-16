import { Component, OnInit } from "@angular/core";
import { LoginServiceService } from "../services/login-service.service";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  user: user;
  currentUsr: user;
  erroMsg: string;
  ngOnInit() {}
  constructor(private router: Router, private http: LoginServiceService) {
    this.user = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      group: ""
    };
    this.currentUsr = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      group: ""
    };
    this.erroMsg = "";
  }
  register(event) {
    event.preventDefault();
    const target = event.target;
    this.user.username = target.querySelector("#username").value;
    this.user.password = target.querySelector("#password").value;
    this.user.firstname = target.querySelector("#firstname").value;
    this.user.lastname = target.querySelector("#lastname").value;
    this.user.gender = target.querySelector("#gender").value;
    this.user.age = target.querySelector("#age").value;
    this.http.register(this.user).subscribe(
      data => {
        if (data != null) {
          console.log("successfully!");
          this.currentUsr = data;
          sessionStorage.setItem("firstname", this.currentUsr.firstname);
          sessionStorage.setItem("lastname", this.currentUsr.lastname);
          sessionStorage.setItem("gender", this.currentUsr.gender);
          sessionStorage.setItem("age", this.currentUsr.age);
          this.router.navigate(["user"]);
          this.http.loggedIn(true);
        } else {
          window.alert("user already exsits");
        }
      },
      error => {
        this.erroMsg = error;
        console.log(error);
        window.alert("Please input correct username or password!!");
      }
    );
  }
}
interface user {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
  group: string;
}
