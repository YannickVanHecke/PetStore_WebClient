import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalType',
  standalone: false
})
export class AnimalTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value) {
      case 0: return "vogel";
      case 1: return "kat";
      case 2: return "hond";
      case 3: return "vis";
      default: return "kat";
    }
  }

}
