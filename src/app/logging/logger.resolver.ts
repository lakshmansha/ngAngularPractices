import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { Ilogger, LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class LoggerResolver implements Resolve<any> {

    constructor(private loggerService: LoggingService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return forkJoin([
            this.loggerService.getAllFireBaseLogs()
        ]).pipe(
            map(allResponses => {
                return {
                    Logs: allResponses[allResponses.length - 1].map(e => {
                        return {
                            id: e.payload.doc.id,
                            ...e.payload.doc.data() as Ilogger
                        } as Ilogger;
                    })
                };
            })
        );
    }
}