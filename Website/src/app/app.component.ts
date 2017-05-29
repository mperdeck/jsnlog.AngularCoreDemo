import { Component } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    createLogItem() {
        console.log('clicked create log item');
    }

    generateException() {
        throw 'the exception message';
    }
}
