import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSNLogService } from './jsnlog/jsnlog.service';
import { UncaughtExceptionHandler } from './uncaughtExceptionHandler/uncaughtExceptionHandler';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
      JSNLogService,
      { provide: ErrorHandler, useClass: UncaughtExceptionHandler }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
