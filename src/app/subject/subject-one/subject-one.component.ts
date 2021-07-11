import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Info } from '../IInfo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-one',
  templateUrl: './subject-one.component.html',
  styleUrls: ['./subject-one.component.scss']
})
export class SubjectOneComponent implements OnInit, OnDestroy {
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
    this.subjectService.sendInfo(new Info('Message From One', 'One'));
  }

}
