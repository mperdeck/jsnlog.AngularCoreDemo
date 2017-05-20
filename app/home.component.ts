import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: 'app/home.component.html'
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    GenerateException() {
        // Try to access variable that doesn't exist
        var x = xyz;
    }

    LogMessage() {
        alert(444)


        var message = document.getElementById('message').value;

        if (document.getElementById('trace').checked) { console.log("trace " + message); JL().trace(message); }
        if (document.getElementById('debug').checked) { console.log("debug " + message); JL().debug(message); }
        if (document.getElementById('info').checked) { console.log("info " + message); JL().info(message); }
        if (document.getElementById('warn').checked) { console.log("warn " + message); JL().warn(message); }
        if (document.getElementById('error').checked) { console.log("error " + message); JL().error(message); }
        if (document.getElementById('fatal').checked) { console.log("fatal " + message); JL().fatal(message); }
    }
}

