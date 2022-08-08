import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
/*import { redirectUnauthorizedTo, redirectLoggedInTo };
*/
import { CanActivate, UrlTree } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';

/*const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);
*/
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
/*    canActivate:[redirectToHome],
*/  },
  {
    path: 'sign-up',
    component: SignUpComponent,
/*    canActivate:[redirectToHome],
*/  },
  {
    path: 'home',
    component: HomeComponent,
/*    canActivate:[redirectToLogin],
*/  },
  {
    path: 'profile',
    component: ProfileComponent,
/*  canActivate:[redirectToLogin]
*/},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

const firebaseConfig = {
  apiKey: "AIzaSyB1Tpd54nAQpVuxclXrmrJRIpH7jPgHDlA",
  authDomain: "angularchatapp-16dff.firebaseapp.com",
  projectId: "angularchatapp-16dff",
  storageBucket: "angularchatapp-16dff.appspot.com",
  messagingSenderId: "171809218296",
  appId: "1:171809218296:web:811820f903d3e91fe7e50d",
  measurementId: "G-HHRP917QG3"
};
