import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  getData(): Observable<any[]> {
    return of([]);
  }
}
