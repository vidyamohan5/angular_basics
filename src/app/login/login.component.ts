import { UserService } from './../services/user.service';
import { MyfireService } from './../services/myfire.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private toastrService: ToastrService, 
    private myfire: MyfireService,
    private userservice : UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  submit(form : NgForm){
    const email =form.value.email;
    const password = form.value.password;
    firebase
    .auth()
    .signInWithEmailAndPassword(email , password)
    .then(userData => {
      if (userData.user.emailVerified) {
        this.myfire
        .getDataFromDatabase(userData.user.uid)
        .then(userDatafromDatabase => {
          this.userservice.set(userDatafromDatabase);
          const message = `${email} has been successfully verified`;
          this.toastrService.success(message);
          this.router.navigate(["/addimages"]);
        })
        .catch(err => console.log(err));
       
      }
      else{
        const message = `${email} not yet verified please enter the valid email address`;
        this.toastrService.error(message);
        firebase.auth().signOut();
      }
    })
    .catch(err => {
      this.toastrService.error(err.message);
    });
  }
}
