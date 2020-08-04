import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TradingService } from 'src/app/services/trading-services';

@Component({
  selector: 'app-trading-content',
  templateUrl: './trading-content.component.html',
  styleUrls: ['./trading-content.component.css']
})
export class TradingContentComponent implements OnInit {


  public options = [];
  @Output() changeSelect = new EventEmitter<string>();

  constructor(private tradingService: TradingService) { }

  ngOnInit(): void {
    this.options = this.tradingService.getSymbolPair();
  }

  dropDownSelect(n){
    this.changeSelect.emit(n.value);
  }

}
