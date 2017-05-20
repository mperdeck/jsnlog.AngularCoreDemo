"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HomeComponent = class HomeComponent {
    constructor() {
        this.message = "some log message";
        this.severity = "Error";
    }
    ngOnInit() {
    }
    GenerateException() {
        throw "*** client side exception ***";
    }
    LogMessage() {
        switch (this.severity) {
            case "Trace":
                console.log("Trace " + this.message);
                JL().trace(this.message);
                break;
            case "Debug":
                console.log("Debug " + this.message);
                JL().debug(this.message);
                break;
            case "Info":
                console.log("Info " + this.message);
                JL().info(this.message);
                break;
            case "Warn":
                console.log("Warn " + this.message);
                JL().warn(this.message);
                break;
            case "Error":
                console.log("Error " + this.message);
                JL().error(this.message);
                break;
            case "Fatal":
                console.log("Fatal " + this.message);
                JL().fatal(this.message);
                break;
            default:
                throw "Unknown severity " + this.severity;
        }
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-home',
        templateUrl: 'app/home.component.html'
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map