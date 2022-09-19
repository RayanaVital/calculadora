import { Serializer } from '@angular/compiler';
import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir onde 1 + 4 = 5', () => {
 const soma = service.calcular(1, 4, CalculadoraService.SOMA);
 expect(soma).toEqual(5);
  });

  it('deve garantir onde 10 - 4 = 6', () => {
    const subtracao = service.calcular(10,4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(6);
  });

  it('deve garantir onde 5 * 2 = 10', () =>{
    const multiplicacao = service.calcular(5,2, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(10);
  });

  it('deve garantir onde 22 / 11 = 2', () => {
    const divisao = service.calcular(22,11, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(2);
  });

  it('deve retornar 0 para operação invalida', () => {
    const operacaoInvalida = service.calcular(1,4, '%');
    expect(operacaoInvalida).toEqual(0);
  });





});
