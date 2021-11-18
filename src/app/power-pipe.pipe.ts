import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPipe',
})
export class PowerPipePipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
