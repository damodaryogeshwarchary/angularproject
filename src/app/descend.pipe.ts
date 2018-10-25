import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descend'
})
export class DescendPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    return value.sort().reverse();
  }

}
