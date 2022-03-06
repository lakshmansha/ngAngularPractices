import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

import { environment } from '@environment/environment';
import { InnerMapper } from '@core/mapper';
import { GithubUser, GithubUserFollowers } from './github.interface';
import { of, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  SearchUserByName(username: string) {
    const url = environment.Github.URL + '/' + username;
    return this.http.get<GithubUser>(url).pipe(
      map(res => {
        return res;
      })
    );
  }

  FetchFollowersByUser(apiUrl: string) {    
    return this.http.get<GithubUserFollowers>(apiUrl).pipe(
      map(res => {
        const responses = {};
        responses['UserFollowers'] = res;
        return responses;
      })
    );
  }  

  FetchUserInfoByName(username: string) {
    return this.SearchUserByName(username).pipe(
      mergeMap((responses) =>
        zip(
          of(responses),
          this.FetchFollowersByUser(responses.followers_url))
      )
    ).pipe(
      map((allResponses) => {
        const responses = allResponses[allResponses.length - 1];
        responses['UserInfo'] = allResponses[allResponses.length - 2];

        return responses;
      })
    );
  }
}
