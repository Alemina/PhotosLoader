import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: any[];
  cols: any[];
  editMode: boolean;
  selectedRow: number;
  @Output() redirect = new EventEmitter<string>();

  ngOnInit() {
    this.table = [
      { image: '/assets/images/example_image_1.png', description: 'face1'},
      { image: '/assets/images/example_image_2.png', description: 'face2'},
      { image: '/assets/images/example_image_3.png', description: 'avatar'}
    ];
    this.cols = [
      { field: 'image', header: 'Image' },
      { field: 'description', header: 'Description' }
    ];
    this.editMode = false;
    this.selectedRow = -1;
  }
  onAddRow(event, form){
    this.table.push({image: event.files[0].objectURL})
    form && form.clear();
  }
  onEditRow(event, form){
    if(this.selectedRow <= -1) return;
    const newImage = event.files[0].objectURL;
    this.table[this.selectedRow].image = newImage;
    form && form.clear();
  }
  onRowSelect(event){
    this.editMode = true;
    this.selectedRow = this.table.indexOf(event.data);
  }
  onRowUnselect(event){
    this.editMode = false;
    this.selectedRow = -1;
  }
  onRowDelete(){
    if(this.selectedRow <= -1) return;
    this.table.splice(this.selectedRow, 1)
    this.editMode = false;
  }
  onDragStart(event, imagePath){
    this.redirect.emit(imagePath)
  }
}
