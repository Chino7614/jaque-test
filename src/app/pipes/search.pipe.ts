import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, text: string): any {
    console.log('value', value);
    return text
      ? value.filter(
          (item) =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            item.email.toLowerCase().includes(text.toLowerCase())
        )
      : value;
  }
}
