import { AuthGuardGuard } from './auth-guard.guard';
import { AddimagesComponent } from './addimages/addimages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {path: '',component:HomeComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'login',component:LoginComponent},
  {path: 'addimages', component:AddimagesComponent, canActivate:[AuthGuardGuard]},
  {path: '**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
