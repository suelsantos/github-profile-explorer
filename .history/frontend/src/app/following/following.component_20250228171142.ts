import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../github.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  username: string = '';
  followingData: any[] = [];  // Dados completos dos usuários seguidos
  filteredFollowings: any[] = [];  // Dados filtrados
  searchTerm: string = '';  // Termo de busca

  constructor(private route: ActivatedRoute, private githubService: GitHubService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.githubService.getFollowingData(this.username).subscribe(data => {
      this.followingData = data;
      this.filteredFollowings = data;  // Inicializa o filtro com todos os dados
    });
  }

  // Método para filtrar os dados com base no termo de busca
  filterFollowings(): void {
    if (this.searchTerm) {
      this.filteredFollowings = this.followingData.filter(following =>
        following.login.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredFollowings = this.followingData;  // Se não houver busca, mostra todos
    }
  }
}
