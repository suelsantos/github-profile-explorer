import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';  // Se você for usar HttpClient para obter dados

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  username: string;
  followingData: any[] = [];  // Para armazenar os dados de quem o usuário está seguindo

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient  // Para fazer as requisições HTTP
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];  // Recupera o nome de usuário da rota

      // Agora você pode fazer uma requisição para a API do GitHub para pegar os dados de quem ele está seguindo
      this.getFollowingData(this.username);
    });
  }

  getFollowingData(username: string): void {
    // Requisição para a API do GitHub para obter dados dos seguidores
    this.http.get<any[]>(`https://api.github.com/users/${username}/following`)
      .subscribe((data) => {
        this.followingData = data;
      });
  }
}
