import { ErrorHandler } from '@angular/core';
import { JL } from 'jsnlog';
import { JSNLogService } from '../jsnlog/jsnlog.service';

export class UncaughtExceptionHandler implements ErrorHandler {

    JL: JL.JSNLog;

    constructor(jsnlogService: JSNLogService) {
        this.JL = jsnlogService.getJSNLog();
    }

    handleError(error: any) {
        this.JL().fatalException('Uncaught Exception', error);
    }
}
