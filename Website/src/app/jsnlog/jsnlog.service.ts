import { Injectable } from '@angular/core';
import { JL } from 'jsnlog';

@Injectable()
export class JSNLogService {
    // Returns a reference to the JSNLog object.
    // JL.JSNLog is the interface that is implemented by the JSNLog object.
    // To mock JSNLog, create a mock object that implements this same interface.
    getJSNLog(): JL.JSNLog { return JL; }
}
