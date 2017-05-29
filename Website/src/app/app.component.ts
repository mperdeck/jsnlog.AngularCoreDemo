import { Component } from '@angular/core';
import { JSNLogService } from './jsnlog/jsnlog.service';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    jsnlog: any;

    constructor(jsnlogService: JSNLogService) {
        this.jsnlog = jsnlogService.getJSNLog();
    }

    createLogItem() {
        this.jsnlog().info("clicked create log item");
    }

    generateException() {
        throw 'the exception message';
    }
}
