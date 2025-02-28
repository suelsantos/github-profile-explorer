import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../github.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
  imports: [CommonModule]
})
export class FollowingComponent implements OnInit {
  username: string = '';
  followingData: any;

  constructor(private route: ActivatedRoute, private githubService: GitHubService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.githubService.getFollowingData(this.username).subscribe(data => {
      this.followingData = data;
    });
  }
}
