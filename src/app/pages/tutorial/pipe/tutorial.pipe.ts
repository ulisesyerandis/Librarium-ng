import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tutorial',
  standalone: true
})
export class TutorialPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown 
  {
    console.log(value)
    return (value < 5) ? 'less than 5 ' : 'more than 5' + value;
  }

}
