import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: 'app/home.component.html'
})
export class HomeComponent implements OnInit {

    message: string = "some log message";
    severity: string = "Error";

    constructor() {
    }

    ngOnInit(): void {
    }

    GenerateException() {
        throw "*** client side exception ***";
    }

    LogMessage() {

        switch (this.severity) {
            case "Trace":
                console.log("Trace " + this.message);
                break;
            case "Debug":
                console.log("Debug " + this.message);
                break;
            case "Info":
                console.log("Info " + this.message);
                break;
            case "Warn":
                console.log("Warn " + this.message);
                break;
            case "Error":
                console.log("Error " + this.message);
                break;
            case "Fatal":
                console.log("Fatal " + this.message);
                break;
            default:
                throw "Unknown severity " + this.severity;
        }
    }
}

