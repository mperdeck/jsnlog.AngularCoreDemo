import { Injectable } from '@angular/core';
import { JL } from 'jsnlog';

@Injectable()
export class JSNLogService {
    getJSNLog(): JL.JSNLog { return JL; }
}
