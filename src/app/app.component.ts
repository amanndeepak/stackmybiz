import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Stackmybiz-test";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyARrCLuCZQGfSHzrls02vzTiqXBu6q2CKE",
      authDomain: "angular-authentication-9b322.firebaseapp.com",
      databaseURL: "https://angular-authentication-9b322.firebaseio.com",
      projectId: "stackmybiz-test",
      storageBucket: "stackmybiz-test.appspot.com",
      messagingSenderId: "G-T4BGFKNMZW"
    });
  }
}
