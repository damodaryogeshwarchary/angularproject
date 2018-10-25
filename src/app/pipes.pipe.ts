import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascend'
})
export class PipesPipe implements PipeTransform {
   
  transform(value: number[], args: string): any {
    value.sort();
    console.log(value);
    console.log(args);
    return value;
  }
}
