import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  feature: string = 'recipe';

  onNavigation(navTab: string) {
    this.feature = navTab;
  }
  title = 'recipe-app';
}
