import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private baseUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUserData(username: string) {
    console.log("A");
    return;
    //return this.http.get(`${this.baseUrl}${username}`);
  }

  getFollowingData(username: string) {
    console.log("B");
    //return this.http.get(`${this.baseUrl}${username}/following`);
  }
}
