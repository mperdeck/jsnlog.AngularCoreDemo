import { ErrorHandler } from '@angular/core';
import { JL } from 'jsnlog';

export class UncaughtExceptionHandler implements ErrorHandler {
    handleError(error: any) {
        JL().fatalException('Uncaught Exception', error);
    }
}
