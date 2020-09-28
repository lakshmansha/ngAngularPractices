import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../environments/environment';
import { Status } from './IStatus.interface';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  //#region Environment Variables

  EnvName: string;  

  //#endregion

  //#region Basic Variables

  title: string;
  Data: string[];
  Status: Status[];

  //#endregion

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
    this.Data = this.route.snapshot.data.responses['Data'];
    this.Status = this.route.snapshot.data.responses['Status'];
    this.EnvName = environment.EnvName;
  }


  //#region Switch Styles

  getColor(status: string) {
    switch (status.toLocaleLowerCase()) {
      case 'success':
        return 'green';
      case 'error':
        return 'red';
      case 'default':
        return 'gray';
    }
  }

  //#endregion


}
