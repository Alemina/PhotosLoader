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
      { image: 'Apple', description: '51%'},
      { image: 'Samsung', description: '83%'},
      { image: 'Microsoft', description: '38%'},
      { image: 'Philips', description: '49%'},
      { image: 'Song', description: '17%'}
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
