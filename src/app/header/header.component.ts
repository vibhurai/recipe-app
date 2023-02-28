import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() navigationTab = new EventEmitter<string>();

  navigate(navLink: string) {
    this.navigationTab.emit(navLink);
  }
}
