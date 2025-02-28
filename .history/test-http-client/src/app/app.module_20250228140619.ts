import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Necessário para fazer requisições HTTP
import { AppComponent } from './app.component';  // Importa o componente principal

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Inclui o HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Define o componente principal
})
export class AppModule { }
