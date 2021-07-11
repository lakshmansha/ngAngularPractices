import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Info } from '../IInfo.interface';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-two',
  templateUrl: './subject-two.component.html',
  styleUrls: ['./subject-two.component.scss']
})
export class SubjectTwoComponent implements OnInit, OnDestroy {

  info: Info;
  subscription: Subscription;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subscription = this.subjectService.onInfo().subscribe(info => this.info = info);
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  SentMessage(): void {
    this.subjectService.sendInfo(new Info('Message From Two', 'Two'));
  }

}
