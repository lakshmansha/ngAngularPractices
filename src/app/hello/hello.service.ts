import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Status } from './IStatus.interface';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  tempData: string[] = [];
  tempStatus: Status[] = [];

  constructor() {
    this.tempData.push("Service");
    this.tempData.push("Resolver");

    this.tempStatus.push(new Status("Error", "First Error Message"));
    this.tempStatus.push(new Status("Error", "Second Error Message"));
    this.tempStatus.push(new Status("Default", "First Default Message"));
    this.tempStatus.push(new Status("Success", "First Success Message"));
    this.tempStatus.push(new Status("Error", "Third Error Message"));
    this.tempStatus.push(new Status("Success", "Second Success Message"));    
  }

  getData(): Observable<any[]> {
    return of(this.tempData);
  }

  getStatus(): Observable<any[]> {
    return of(this.tempStatus);
  }
}
