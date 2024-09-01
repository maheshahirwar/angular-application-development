import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() searchTerm = new EventEmitter<string>();

  onSearch(searchTerm: string) {
    this.searchTerm.emit(searchTerm);
  }
}
