import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  popupVisibility = false;

  showPopup() {
    this.popupVisibility = true;
  }
  onPopupClosed() {
    this.popupVisibility = false;
  }
}
