import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-and-career-with-me';

  handleSearch(searchTerm: string) {
    // Perform your search logic here
    console.log('Search term:', searchTerm);
  }
}
