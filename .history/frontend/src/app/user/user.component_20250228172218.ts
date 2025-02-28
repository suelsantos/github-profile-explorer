import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = '';
  userData: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private githubService: GitHubService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;

    this.githubService.getUserProfile(this.username).subscribe(data => {
    //this.githubService.getUserData(this.username).subscribe(data => {
      this.userData = data;
      this.isLoading = false;
    });
  }
}
