import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

export const routes: Routes = [
{path:'Home', component:HomeComponent},
{path:'About',component:AboutusComponent},
{path:'dashboard',component:DashbaordComponent}


];
