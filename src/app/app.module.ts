import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { TemplateComponent } from './components/user/register/template/template.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

//services
import { UserService } from './services/user.service.client';
import { SharedService } from './services/shared.service.client';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReviewComponent } from './components/review/review.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TemplateComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ReviewComponent,
    SearchComponent,
    ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, SharedService],
  entryComponents: [AppComponent, TemplateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }