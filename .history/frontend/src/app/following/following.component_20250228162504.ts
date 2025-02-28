import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  username: string;
  followingData: any[] = [];
  searchTerm: string = ''; // Armazena o termo de busca

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.getFollowingData(this.username);
    });
  }

  getFollowingData(username: string): void {
    this.http.get<any[]>(`https://api.github.com/users/${username}/following`)
      .subscribe(data => {
        this.followingData = data;
      });
  }

  // Função para filtrar os dados com base no termo de busca
  filteredFollowingData() {
    if (!this.searchTerm) {
      return this.followingData; // Retorna todos os seguidos se não houver busca
    }
    return this.followingData.filter(following => {
      return following.login.toLowerCase().includes(this.searchTerm.toLowerCase()); // Filtra pelo login
    });
  }
}
