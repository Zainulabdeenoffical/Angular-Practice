import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
{path:'',redirectTo:'Home',pathMatch:'full'},
{path:'Home', component:HomeComponent,title:'home'},
{path:'About',component:AboutusComponent , title:'About' , canActivate:[authGuard]},
{path:'dashboard',component:DashbaordComponent , title:'Dashboard', canActivate:[authGuard]},
{path:'login',component:LoginComponent,title:'login'},
{path:'**',component:PagenotfoundComponent , title:'Page not found'}



];
