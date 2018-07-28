import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: any[];

  ngOnInit() {
    this.table = [
      { image: '/assets/images/example_image_1.png', description: '51%'},
      { image: '/assets/images/example_image_2.png', description: '83%'},
      { image: '/assets/images/example_image_3.png', description: '38%'}
    ];
  }
  myUploader(event){
    console.log('myUploader ', event)
  }
  myAdd(){
    console.log('add')
  }
  onRowSelect(event){
    console.log('onRowSelect ', event)
  }
}
