import { Component, inject } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
 private router = inject(Router);
 constructor()
 {
 // private router: Router
 }

 navigate()
  {
     this.router.navigate(['/About']);
  }
}
