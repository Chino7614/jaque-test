import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<string>();
  @Output() emitOrder = new EventEmitter<string>();
  @Output() emitStatus = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
}
