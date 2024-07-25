import { Pipe, PipeTransform } from '@angular/core';

//Fernando | toggleCase = 'FERNANDO'
//FERNANDO| toggleCase = 'fernando'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.toUpperCase();

  }

}
