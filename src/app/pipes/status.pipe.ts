import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: any, status: string): unknown {
    let res: any;
    switch (status) {
      case 'active':
        res = value.filter((item) => item.active);
        break;
      case 'disabled':
        res = value.filter((item) => !item.active);
        break;
      default:
        res = value;
        break;
    }
    return res;
  }
}
