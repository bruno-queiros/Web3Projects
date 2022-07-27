import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { UseMetaMaskService } from './services/useMetaMask.service';
import { WinRefService } from './services/winref.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WinRefService, UseMetaMaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
