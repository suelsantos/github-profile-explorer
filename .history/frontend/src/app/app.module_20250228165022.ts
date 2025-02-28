import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FollowingComponent } from './following/following.component';
import { routes } from './app.routes';  // Arquivo com as rotas configuradas
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FollowingComponent  // Declare todos os componentes que você vai usar
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Necessário para fazer requisições HTTP
    RouterModule.forRoot(routes),  // Carrega as rotas configuradas
    FormsModule,
    InputTextModule
  ],
  bootstrap: [AppComponent]  // Componente principal a ser carregado
})
export class AppModule { }
