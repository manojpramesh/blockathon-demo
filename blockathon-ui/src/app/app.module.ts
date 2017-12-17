import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdentityComponent } from './identity/identity.component';
import { RenumerationComponent } from './renumeration/renumeration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'identity', component: IdentityComponent },
  { path: 'renumeration', component: RenumerationComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentityComponent,
    RenumerationComponent,
    NavbarComponent,
    UsersComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
