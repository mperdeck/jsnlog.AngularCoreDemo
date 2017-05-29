import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSNLogService } from './jsnlog/jsnlog.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
      JSNLogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
