import { Component } from '@angular/core';
import { Message } from '../../../data/message';

@Component({
  selector: 'app-image-field',
  templateUrl: './image-field.component.html',
  styleUrls: ['./image-field.component.css']
})
export class ImageFieldComponent {

  msgs: Message[];

  uploadedFiles: any[] = [];

  onUpload(event) {
      for (const file of event.files) {
          this.uploadedFiles.push(file);
      }
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
