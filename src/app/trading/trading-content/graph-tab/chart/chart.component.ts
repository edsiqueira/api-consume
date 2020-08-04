import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TradingService } from '../../../../services/trading-services'
import { FakeCoin } from '../../../../model/fakeCoin'


declare var google: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {


  @Input() selectedAssets: string;
  @Input() selectedPeriod: string;
  

  constructor(private tradingService: TradingService) {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.drawChart(); 
    console.log('drawChart('+ this.selectedAssets + ', '+ this.selectedPeriod +'): ' + this.selectedPeriod)
  }

//aqui começa o googlechart
  drawChart(){ 
    
    if(this.selectedAssets !== null && this.selectedAssets !== "") {
      var base = this.selectedAssets.split("_")[0];
      var quote = this.selectedAssets.split("_")[1];
  
      this.tradingService.fillData(base, quote, this.selectedPeriod).subscribe((data: any) =>{
        var arrFakeCoin = []

        data.forEach(function(item){
          var ar = [item.time_period_start, item.price_high, item.price_close, item.price_open, item.price_low, ]
          arrFakeCoin.push(ar);
        });
        
        if(typeof(google) !== 'undefined'){
          google.charts.load('current', {'packages': ['corechart']});
          setTimeout(() => {
            google.charts.setOnLoadCallback(this.createChart(arrFakeCoin));
          }, 2000);
        }
      });
    }
  }

  createChart(fakeCoin: FakeCoin[]){
    this.showChart(fakeCoin);
  }

  showChart(fakeCoin: FakeCoin[]){
    const elem = document.getElementById('pie_chart');
    const chart = new google.visualization.CandlestickChart(elem);
    chart.draw(this.getDataTable(fakeCoin), this.getOptions());
  }

  getDataTable(fakeCoin: FakeCoin[]){
    return new google.visualization.arrayToDataTable(fakeCoin, true);
  }

  getOptions(): any{
    return {
      'title': 'Teste chart',
      'width': '100%',
      'height': '500',
      'legend': 'none'
    }
  }

}
