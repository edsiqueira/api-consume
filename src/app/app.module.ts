import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarketDataComponent } from './market-data/market-data.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TradingComponent } from './trading/trading.component';
import { SideNavComponent } from './trading/side-nav/side-nav.component';
import { TradingContentComponent } from './trading/trading-content/trading-content.component';
import { OrderTabComponent } from './trading/trading-content/order-tab/order-tab.component';
import { HistoryTabComponent } from './trading/trading-content/history-tab/history-tab.component';
import { GraphTabComponent } from './trading/trading-content/graph-tab/graph-tab.component';
import { ChartComponent } from './trading/trading-content/graph-tab/chart/chart.component';
import { PeriodComponent } from './trading/trading-content/graph-tab/period/period.component';

import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MarketDataComponent,
    NavMenuComponent,
    TradingComponent,
    SideNavComponent,
    TradingContentComponent,
    OrderTabComponent,
    HistoryTabComponent,
    GraphTabComponent,
    ChartComponent,
    PeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'trading', component: TradingComponent},
      { path: 'marketdata', component: MarketDataComponent},
      { path: '',pathMatch:'full', redirectTo:'marketdata'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
