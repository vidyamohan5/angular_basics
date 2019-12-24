import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'redbus';

  ngOnInit(){
     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBOC1b5HtL9vgvx4zs1fdUgkgRFs0KGWmE",
    authDomain: "instagram-39d3a.firebaseapp.com",
    databaseURL: "https://instagram-39d3a.firebaseio.com",
    projectId: "instagram-39d3a",
    storageBucket: "instagram-39d3a.appspot.com",
    messagingSenderId: "803255055540",
    appId: "1:803255055540:web:512a6a659f183700ba13e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
