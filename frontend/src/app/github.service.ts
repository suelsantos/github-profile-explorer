import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private baseUrl = 'http://localhost:8000/api/user/';

  constructor(private http: HttpClient) { }

  getUserData(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${username}`);
  }

  getFollowingData(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${username}/followings`);
  }
}
