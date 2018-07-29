import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-field',
  templateUrl: './image-field.component.html',
  styleUrls: ['./image-field.component.css']
})
export class ImageFieldComponent implements OnInit {

  uploadedImage: string;
  @Input() draggedImagePath:string;

  ngOnInit(){
    this.uploadedImage = '/assets/images/example_image_1.png';
  }
  onDropFromDesktop(event, form){
    console.log('onDropFromDesktop ', event);
    this.uploadedImage = event.files[0].objectURL;
    form && form.clear();
  }
  onDropFromClipboard(event){
    this.uploadedImage = this.draggedImagePath;
  }
}
