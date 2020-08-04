import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-tab',
  templateUrl: './graph-tab.component.html',
  styleUrls: ['./graph-tab.component.css']
})
export class GraphTabComponent implements OnInit {

  @Input() selectedAssets: string;
  @Input() selectedPeriod: string;

  constructor() {

   }
  ngOnInit(): void {
    this.selectedPeriod = "1MTH"
  }

  getPeriod(event){
    this.selectedPeriod = event;
  }

}
