import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Info } from './IInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private infoSubject = new Subject<Info>();

  constructor() { }

  onInfo(): Observable<any> {
    return this.infoSubject.asObservable();
  }

  sendInfo(info: any) {
    if (info !== undefined) {
      this.infoSubject.next(info);
    }
  }

  clearInfo() {
    this.infoSubject.next();
  }

}
