import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: any[];
  cols: any[];


  ngOnInit() {
    this.table = [
      { image: '/assets/images/example_image_1.png', description: '51%'},
      { image: '/assets/images/example_image_2.png', description: '83%'},
      { image: '/assets/images/example_image_3.png', description: '38%'}
    ];
    this.cols = [
      { field: 'image', header: 'Image' },
      { field: 'description', header: 'Description' }
    ];
  }
  myUploader(event, form){
    this.table.push({image: event.files[0].objectURL})
    form && form.clear();
  }
  myAdd(){
    console.log('add')
    this.table = [];
  }
  onRowSelect(event){
    console.log('onRowSelect ', event)
  }
}
