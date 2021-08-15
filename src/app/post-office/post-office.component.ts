import { Component, OnInit } from '@angular/core';

import { PostOfficeService } from './post-office.service';
import { PostOffice } from './post-office.interface';

@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrls: ['./post-office.component.scss']
})
export class PostOfficeComponent implements OnInit {

  PostOffice: PostOffice[] = [];

  constructor(private service: PostOfficeService) { }

  ngOnInit(): void {
  }

  OnPinCodeChange(event: any) {
    if(event.target.value !== '') {
      const pincode = event.target.value;
      this.service.SearchPostofficeByPinCode(pincode).subscribe(res => {
        this.PostOffice = res;
      })
    }
  }

}
