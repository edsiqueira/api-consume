import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit {
  
  constructor() { }

  public tradingContentSelectedAsset: string;

  ngOnInit(): void {
    this.tradingContentSelectedAsset = "BTC_USD"
    console.log(this.tradingContentSelectedAsset )
  }


  getSelectedAssets(event){
    
    this.tradingContentSelectedAsset = event;
  }

}
