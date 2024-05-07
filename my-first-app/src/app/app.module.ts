import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import FormsModule to use ngModel
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //add FormsModule to app module
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
