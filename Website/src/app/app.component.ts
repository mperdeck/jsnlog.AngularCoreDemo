import { Component } from '@angular/core';
import { JSNLogService } from './jsnlog/jsnlog.service';
import { JL } from 'jsnlog';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    JL: JL.JSNLog;

    constructor(jsnlogService: JSNLogService) {
        this.JL = jsnlogService.getJSNLog();
    }

    createLogItem() {
        this.JL().info("clicked create log item");
    }

    generateException() {
        throw 'the exception message';
    }
}
