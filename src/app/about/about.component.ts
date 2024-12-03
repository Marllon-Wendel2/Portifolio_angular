import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isTruncated: boolean = true;

  toggleText(): void
 {
  this.isTruncated = !this.isTruncated;
 }
}
