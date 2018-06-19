import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';

import { Routing } from './app.routing';
import { UserService } from './services/user.service.client';
import { TemplateComponent } from './components/user/register/template/template.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TemplateComponent,
    ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent, TemplateComponent]
})
export class AppModule { }