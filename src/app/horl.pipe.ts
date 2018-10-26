import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horl'
})
export class HorlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if(value>1000){
      return value + "is High";
    }
    else if(value<1000){
    return value + "is Low";
    }
    else{
      return value + "is equal";
    }
  }

}
