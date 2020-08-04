import { Injectable, Inject, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { FakeCoin } from '../model/fakeCoin'
import { DatePipe } from '@angular/common';


@Injectable({
    providedIn: "root"
})
export class TradingService implements OnInit{

    private _baseUrl: string = "https://rest.coinapi.io/";
    private _sandBoxUrl: string = "https://rest-sandbox.coinapi.io/";

    constructor(private http: HttpClient){    }

    public fakeCoin: FakeCoin;
    public fakeCoinArr = [];
    public headers = new HttpHeaders()

    ngOnInit(): void {
        this.fakeCoin = new FakeCoin();
    }


    fillData(base: string, quote: string, period: string): Observable<any>{

        return this.http.get<any>(this._baseUrl + "v1/ohlcv/"+base+"/"+quote+"/latest?period_id=" + period + "&limit=10", {'headers': this.headers});
    }











    getSymbolPair(): any{
        var obj =  [{
            asset_id_base: "USD",
            asset_id_quote: "BTC"
        },{
            asset_id_base: "BTC",
            asset_id_quote: "USD"
        },{
            asset_id_base: "ETH",
            asset_id_quote: "USD"
        },{
            asset_id_base: "USD",
            asset_id_quote: "ETH"
        },{
            asset_id_base: "LTC",
            asset_id_quote: "USD"
        }]

        return obj
    }


    fillFakeData(): any{
        var pipe = new DatePipe("en-US");
        var data = [{
                data: '19-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '20-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '21-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '22-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '23-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '24-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '25-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '26-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '27-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '28-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '29-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            },{
                data: '30-07-2020',
                priceHigh: 100 * Math.random(),
                priceOpen: 100 * Math.random(),
                priceLow: 100 * Math.random(),
                priceClose: 100 * Math.random()
            }] 

        return [
            [data[0].data, data[0].priceOpen, data[0].priceHigh, data[0].priceLow, data[0].priceClose],
            [data[1].data, data[1].priceOpen, data[1].priceHigh, data[1].priceLow, data[1].priceClose],
            [data[2].data, data[2].priceOpen, data[2].priceHigh, data[2].priceLow, data[2].priceClose],
            [data[3].data, data[3].priceOpen, data[3].priceHigh, data[3].priceLow, data[3].priceClose],
            [data[4].data, data[4].priceOpen, data[4].priceHigh, data[4].priceLow, data[4].priceClose],
            [data[5].data, data[5].priceOpen, data[5].priceHigh, data[5].priceLow, data[5].priceClose],
            [data[6].data, data[6].priceOpen, data[6].priceHigh, data[6].priceLow, data[6].priceClose],
            [data[7].data, data[7].priceOpen, data[7].priceHigh, data[7].priceLow, data[7].priceClose],
            [data[8].data, data[8].priceOpen, data[8].priceHigh, data[8].priceLow, data[8].priceClose],
            [data[9].data, data[9].priceOpen, data[9].priceHigh, data[9].priceLow, data[9].priceClose],
            [data[10].data, data[10].priceOpen, data[10].priceHigh, data[10].priceLow, data[10].priceClose],
            [data[11].data, data[11].priceOpen, data[11].priceHigh, data[11].priceLow, data[11].priceClose]
        ]

    }
}

