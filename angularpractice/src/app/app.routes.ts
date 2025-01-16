import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; // Adjust the path as necessary

const routes: Routes = [
  { path: 'about/:id', component: AboutComponent }, // Define the route with a parameter
  // Other routes can be defined here
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Example redirect
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
