import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStatus } from '../hello/IStatus.interface';

@Component({
  selector: 'app-reactive-frm',
  templateUrl: './reactive-frm.component.html',
  styleUrls: ['./reactive-frm.component.scss']
})
export class ReactiveFrmsComponent implements OnInit {

  //#region Form Variables

  statusFrm: FormGroup;

  //#endregion

  //#region Alert Variables

  IsDisplay: boolean;
  Msg: string;
  altClass: string;

  //#endregion

  constructor(private formBuilder: FormBuilder) {
    this.CreateForm();
  }

  ngOnInit(): void {
  }

  CreateForm() {
    this.statusFrm = this.formBuilder.group({
      Status: ['', Validators.required],
      Message: ['', Validators.required],
    });
  }

  Submit() {
    const statusFrm = this.statusFrm.getRawValue() as IStatus;

    this.altClass = "alert alert-success";
    this.Msg = `Added ${statusFrm.Status} Status with Message ${statusFrm.Message} Successfully`;
    this.IsDisplay = true;
    this.statusFrm.reset();

    setTimeout(() => {
      this.IsDisplay = false;
    }, 5000);
  }

}
