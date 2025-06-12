import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex',
  standalone: false
})

export class SexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === true)
      return "M";
    return "V";
  }

}
