import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from "firebase";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private toastr : ToastrService, private router: Router, private userservice :UserService) { }

  ngOnInit() {
  }

  submit(form :NgForm) {
    const email = form.value.email;
    const fullname = form.value.fullname;
    const username = form.value.username;
    const password = form.value.password;
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then( userData => {
    console.log(userData);
    userData.user.sendEmailVerification();
    const message = `Notification email has been sent to ${email} address please verify email`;
    this.toastr.success(message);
    //connecting firebase database
    firebase.database().ref("/users" +userData.user.uid).set({
      uid : userData.user.uid,
      email,
      password,
      fullname,
      username,
      registrationDate : new Date().toString()
    });
    this.router.navigate(["/login"]);
  })
  .catch(err =>{
    this.toastr.error(err.message);
   console.log(err)
  });
  }
}