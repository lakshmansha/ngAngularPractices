import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class YourResolver implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return ;
    }
}