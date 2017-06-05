import { Component } from '@angular/core';

// imports used to inject JSNLog and to use its functionality and typings
import { JL } from 'jsnlog';
import { Inject } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    JL: JL.JSNLog;

    // JL.JSNLog is an interface describing the JSNLog library
    constructor( @Inject('JSNLOG') JL: JL.JSNLog) {
        this.JL = JL;
    }

    createLogItem() {
        this.JL().info("Will not be logged"); // Level has been set to WARN in app.module.ts.
        this.JL().warn("clicked create log item button");
    }

    generateException() {
        throw 'the exception message';
    }
}
