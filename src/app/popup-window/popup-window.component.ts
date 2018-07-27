import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent implements OnInit {
  @Output() popupClosed = new EventEmitter();
  table: any[];

  ngOnInit() {
    this.table = [
      { image: 'Apple', description: '51%'},
      { image: 'Samsung', description: '83%'},
      { image: 'Microsoft', description: '38%'},
      { image: 'Philips', description: '49%'},
      { image: 'Song', description: '17%'}
    ];
  }

  closePopup() {
    this.popupClosed.emit();
  }
}
