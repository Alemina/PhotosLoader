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

  url: any;
  isDone: boolean;

  test: string;

  ngOnInit(){
    this.isDone = false;
  }

  myUploader(event) {
      console.log('here');
      for (const file of event.files) {
          console.log('asd ', file);
          this.uploadedFiles.push(file);
          this.url = file.objectURL;
          this.isDone = true;
      }
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
      this.test = `${this.test} asd `;
  }

}
