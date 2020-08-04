import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {


  @Output() periodClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getPeriodClick(e){
    this.periodClick.emit(e)
  }

}
