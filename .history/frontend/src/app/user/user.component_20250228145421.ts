import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: any = {};
  username: string = '';
  showBioModal: boolean = false;  // Controla a visibilidade do modal da bio

  constructor(private githubService: GitHubService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username') || '';
      this.getUserData();
    });
  }

  // Função para obter os dados do usuário
  getUserData(): void {
    this.githubService.getUserData(this.username).subscribe(
      data => {
        this.userData = data;
      },
      error => {
        console.error('Erro ao obter dados do GitHub:', error);
      }
    );
  }

  // Função para abrir o modal da Bio
  openBioModal(): void {
    this.showBioModal = true;
  }

  // Função para fechar o modal da Bio
  closeBioModal(): void {
    this.showBioModal = false;
  }
}
