import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1: number;
  valor2: number;
  valor3: number;
  valor4: number;
  valor5: number;
  resultado: string="";
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.valor4 = this.retornarAleatorio();
    this.valor5 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.valor4 = this.retornarAleatorio();
    this.valor5 = this.retornarAleatorio();

    let sumaDados:number = this.valor1+this.valor2+this.valor3+this.valor4+this.valor5;
    if (sumaDados>=20)     
      this.resultado=` Ganó, su puntuación es ${sumaDados}`;
    else
      this.resultado=` Perdió, su puntuación es ${sumaDados}`;
  }
}