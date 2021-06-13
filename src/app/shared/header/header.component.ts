import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //#region Feature Flag

  IsSchema: boolean;

  //#endregion


  constructor() { }

  ngOnInit(): void {
    this.IsSchema = Feature.Schema;
  }

}
