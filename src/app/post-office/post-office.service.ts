import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '@environment/environment';
import { InnerMapper } from '@core/mapper';
import { PostOffice } from './post-office.interface';

@Injectable({
  providedIn: 'root'
})
export class PostOfficeService {

  constructor(private http: HttpClient) { }

  
  SearchPostofficeByPinCode(pincode: string) {
    const url = environment.PostOffice.Url + '/' + pincode;
    return this.http.get<any[]>(url).pipe(
      map(res => {
        let rtnValue = [];
        if(res.length > 0) {
          const ValueLst = res[0]['PostOffice'];

          ValueLst.forEach((element: any) => {
            const rtnItem = new InnerMapper(PostOffice).map(element);
            rtnValue.push(rtnItem);
          });
        }

        if(!rtnValue) rtnValue = [];

        return rtnValue;
      })
    );
  }
}
