import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-modelforms',
  templateUrl: './ng-modelforms.component.html',
  styleUrls: ['./ng-modelforms.component.scss']
})
export class NgModelformsComponent implements OnInit {

  //#region Form Variables

  Status: string;
  Message: string;

  //#endregion

  //#region Alert Variables

  IsDisplay: boolean;
  Msg: string;
  altClass: string;

  //#endregion


  constructor() { }

  ngOnInit(): void {
    this.Status = '';
    this.Message = '';
  }

  Submit() {    
    this.altClass = "alert alert-success";
    this.Msg = "Added Successfully";
    this.IsDisplay = true;
    this.Reset();

    setTimeout(()=> {
      this.IsDisplay = false;
    }, 5000);
  }

  Reset() {
    this.Status = '';
    this.Message = '';
  }

}
