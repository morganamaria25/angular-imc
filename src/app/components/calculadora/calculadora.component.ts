import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
info:any = {} ;
valor: number = 0;
abaixo = this.valor < 18;

calcularIMC(){
this.valor = Math.trunc(this.info.peso /  Math.pow(this.info.altura, 2));
console.log(this.valor);
return this.valor;
}

  constructor() { }

  ngOnInit(): void {
  }

}
