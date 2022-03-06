import { Component, OnInit } from '@angular/core';

import { GithubUser, GithubUserFollowers } from './github.interface';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  UserInfo: GithubUser;
  UserFollowers: GithubUserFollowers[] = [];
  constructor(private service: GithubService) { }

  ngOnInit(): void {    
  }

  OnUserChange(event: any) {
    if(event.target.value !== '') {
      const userName = event.target.value;     
      this.service.FetchUserInfoByName(userName).subscribe(res => {
        this.UserInfo = res["UserInfo"];
        this.UserFollowers = res["UserFollowers"];
      });
    }
  }
}
