import { Component, OnInit } from '@angular/core';
import { Message } from '../../../data/message.model';

@Component({
  selector: 'app-image-field',
  templateUrl: './image-field.component.html',
  styleUrls: ['./image-field.component.css']
})
export class ImageFieldComponent implements OnInit {

  msgs: Message[];

  uploadedFiles: any[] = [];

  ngOnInit(){

  }


}
