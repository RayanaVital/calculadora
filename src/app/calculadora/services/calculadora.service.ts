import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
    let result: number; //armazena o resultado da operação

    
  }
}
