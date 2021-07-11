import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Info } from './IInfo.interface';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

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

  SentMessage() {
    this.subjectService.sendInfo(new Info('Message From Main', 'Main'));
  }

}
