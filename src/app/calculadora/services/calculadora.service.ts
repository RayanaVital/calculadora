/**
 * Serviço responsavel por executar as operações
 * da calculadora.
 *
 * @author Rayana Vital<rayanavital@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Define as constantes utilizadas para
  indentificar as operações de calculo   */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }
  /** Método que calcula a operação matemática dado dois numeros.
   * Suporta as operações soma, subtração, multiplicação e divisão.
   *
   * @param num1
   * @param num2
   * @param operacao
   * @return number resultado da operação
  */

  calcular(num1: number, num2: number, operacao: string) {
    let result: number; //armazena o resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        result = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        result = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        result = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        result = num1 / num2;
      break;
      default:
        result = 0;
    }


  }
}
