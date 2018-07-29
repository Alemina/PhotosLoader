import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent  {

  @Output() popupClosed = new EventEmitter();
  redirectImagePath:string;

  closePopup() {
    this.popupClosed.emit();
  }
}
