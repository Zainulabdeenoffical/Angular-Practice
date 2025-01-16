import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] // Fixed here
})
export class AboutComponent {
  private route = inject(ActivatedRoute);
  public id: string | null = null; // Property to hold the id

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); // Store the id
    console.log(this.id);

    this.route.params.subscribe({
      next: (val) => {
        console.log(val);
        this.id = val['id']; // Update the id if it changes
      },
      error: (e: any) => {
        console.log(e);
      }
    });
  }
}
