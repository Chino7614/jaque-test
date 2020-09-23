import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() headers: any;
@Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
}
