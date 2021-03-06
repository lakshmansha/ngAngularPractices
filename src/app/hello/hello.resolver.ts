import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { HelloService } from './hello.service';

@Injectable({ providedIn: 'root' })
export class HelloResolver implements Resolve<any> {

    constructor(private helloService: HelloService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return forkJoin([
            this.helloService.getData(),
            this.helloService.getStatus()
        ]).pipe(
            map(allResponses => {
                return {
                    Data: allResponses[allResponses.length - 2],
                    Status: allResponses[allResponses.length - 1]
                };
            })
        );
    }
}