import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: false
})
export class AgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {
    var currentDate = new Date();
    const differenceInMilliseconds = new Date(currentDate).getTime() - new Date(value).getTime();
    return Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  }
}

