import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesorno'
})
export class YesornoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    let yesornoValue
    if (value.toString() == '0') {
      yesornoValue = 'n'
    }
    if (value.toString() == '1') {
      yesornoValue = 'y'
    }
 
    return yesornoValue;
  }

}
