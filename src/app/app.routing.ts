import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from './services/auth-guard.service';
import {AdminGuard} from './services/adminGuard.service';
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {ReviewComponent} from './components/review/review.component';
import {SearchComponent} from './components/search/search.component';
import {UserlistComponent} from './components/userlist/userlist.component';
import {MessagelistComponent} from './components/messagelist/messagelist.component';


// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '', component: HomeComponent},
  { path : 'login', component: LoginComponent},
  { path : 'register' , component: RegisterComponent },
  { path : 'user' , component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'about' , component: AboutComponent},
  { path : 'contact' , component: ContactComponent},
  { path : 'user/reviews/:uid2' , component: ReviewComponent},
  { path : 'search' , component: SearchComponent}, 
  { path : 'userlist' , component: UserlistComponent, canActivate: [AuthGuard, AdminGuard]},
  { path : 'messagelist' , component: MessagelistComponent, canActivate: [AuthGuard, AdminGuard]},
    // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);