import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date:string,format:string): any {

    let dateLimit = new Date(format);
    let dateInput = new Date(date);

    if (dateInput < dateLimit) {
      return dateInput.getFullYear();
    }
    else {
      return dateInput.toString();
    }

  }

}
