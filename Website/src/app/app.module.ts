import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import definitions for the providers list
import { JSNLogService } from './jsnlog/jsnlog.service';

// Import definitions for the UncaughtExceptionHandler provider
import { JL } from 'jsnlog';
import { ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

class UncaughtExceptionHandler implements ErrorHandler {
    handleError(error: any) {
        JL().fatalException('Uncaught Exception', error);
    }
}

// Configure the JSNLog logging library.
// See http://jsnlog.com/Documentation/JSNLogJs

// Set the level of the nameless loggr to WARN, so only log items
// with severity WARN or higher get logged.
JL().setOptions({ "level": JL.getWarnLevel() });


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
