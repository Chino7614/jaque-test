import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'tableKey'
})
export class TableKeyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const keys = [];
    value.forEach(response => {
      // tslint:disable-next-line: forin
      for (const key in response) {
        keys.push({keys: key, value: response[key]});
      }
    });
    console.log('resonses', keys);
    return keys;
  }

}
