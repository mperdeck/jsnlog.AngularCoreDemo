import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ErrorHandler } from '@angular/core';
import { JL } from 'jsnlog';

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
      { provide: 'JSNLOG', useValue: JL },
      { provide: ErrorHandler, useClass: UncaughtExceptionHandler }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



