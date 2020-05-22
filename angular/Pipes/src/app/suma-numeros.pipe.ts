import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumaNumeros'
})
export class SumaNumerosPipe implements PipeTransform {

  transform(number1:string, number2:string, type:string=''): string {

    let calculo = 0;

    switch(type) {
      case 'restar':
        calculo = parseInt(number1) - parseInt(number2);
      break;
      case 'dividir':
        calculo = parseInt(number1) / parseInt(number2);
      break;
      case 'multiplicar':
        calculo = parseInt(number1) * parseInt(number2);
      break;
      default:
      case 'sumar':
        calculo = parseInt(number1) + parseInt(number2);
      break;
    }


    return (calculo).toString();

  }

}
