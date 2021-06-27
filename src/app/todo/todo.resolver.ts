import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

import { TodoService } from './todo.service'

@Injectable({ providedIn: 'root' })
export class TodoResolver implements Resolve<any> {

    constructor(private service: TodoService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return forkJoin([
            this.service.getTodo()
        ]).pipe(
            map(allResponses => {
                return {
                    Todos: allResponses[allResponses.length - 1]
                };
            })
        );
    }
}