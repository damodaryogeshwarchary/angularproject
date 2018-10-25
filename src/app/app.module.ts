import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Start1Component } from './start1/start1.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { PipesPipe } from './pipes.pipe';
import { DescendPipe } from './descend.pipe';




@NgModule({
  declarations: [
    AppComponent,
    Start1Component,
    SuccessMessageComponent,
    WarningMessageComponent,
    PipesPipe,
    DescendPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("this is damodar krishna yogeshwar");
  }
 }
