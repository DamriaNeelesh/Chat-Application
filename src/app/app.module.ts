import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
/*import { initializeApp, provideFirebaseApp } from '@angular/fire/app';*/
import { environment } from '../environments/environment';
/*import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';*/
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './components/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { } from '@angular/material/form-field';
import { } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
/*import { DateDisplayPipe } from './pipes/date-display.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';*/
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    SignUpComponent,
    ProfileComponent,
    MatToolbarModule
    /*DateDisplayPipe,*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
/*    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),*/
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
const firebaseConfig = {
  apiKey: "AIzaSyB1Tpd54nAQpVuxclXrmrJRIpH7jPgHDlA",
  authDomain: "angularchatapp-16dff.firebaseapp.com",
  projectId: "angularchatapp-16dff",
  storageBucket: "angularchatapp-16dff.appspot.com",
  messagingSenderId: "171809218296",
  appId: "1:171809218296:web:811820f903d3e91fe7e50d",
  measurementId: "G-HHRP917QG3"
};
