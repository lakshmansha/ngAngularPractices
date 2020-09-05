import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  tempData: string[] = [];

  constructor() {
    this.tempData.push("Service");
    this.tempData.push("Resolver");
  }

  getData(): Observable<any[]> {
    return of(this.tempData);
  }
}
