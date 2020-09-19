import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../environments/environment';

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

  //#endregion

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
    this.Data = this.route.snapshot.data.responses['Data'];
    this.EnvName = environment.EnvName;
  }

}
