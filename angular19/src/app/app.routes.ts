import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
{path:'',redirectTo:'Home',pathMatch:'full'},
{path:'Home', component:HomeComponent,title:'home'},
{path:'About',component:AboutusComponent , title:'About'},
{path:'dashboard',component:DashbaordComponent , title:'Dashboard'},
{path:'**',component:PagenotfoundComponent , title:'Page not found'}


];
