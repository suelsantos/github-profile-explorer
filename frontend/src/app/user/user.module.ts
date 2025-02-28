import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router'; // Importando o RouterModule

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule // Aqui é fundamental para reconhecer routerLink
  ]
})
export class UserModule { }
