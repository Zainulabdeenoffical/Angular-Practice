import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templeteform',
  imports: [FormsModule,CommonModule],
  templateUrl: './templeteform.component.html',
  styleUrls: ['./templeteform.component.css']
})
export class TempleteformComponent {
  // This component handles the template form functionality
  onSubmit(regform: NgForm) {
    this.register(regform);
  }

  register(regform: NgForm) {
    console.log(regform.value);
  }
}
