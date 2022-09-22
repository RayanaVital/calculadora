import { CalculadoraService } from './../services/calculadora.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  limpar():void {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  adicionaNumero(numero: string): void {
    if(this.operacao === null){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    //caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null){
      numAtual = '';
    }
    // se o primeiro digito for '.' concatena o 0 antes do ponto
    if(numConcat === '.' && numAtual === ''){
      return '0.';
    }
    // caso o '.' for digitado e ja tenha '.' apenas retorna um
    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }
    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    //apenas define a operação caso naõ exista uma
    if(this.operacao === null){
      this.operacao = operacao;
      return;
    }
    /*caso a operação esteja definida e o numero 2 selecionado,
    efetua a operação */
    if(this.numero2 !== null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao =operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }

  }
  //efetua o calculo da operação
  calcular(): void{
    if(this.numero2 === null) {
      return;
    };
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  //retorna o valor no display
  get display(): string {
    if(this.resultado !== null){
      return this.resultado.toString();
    }
    if (this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }

}


