import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value.length === 0 || args.length === 0) {
      return value;
    }

    const filter = args.toLocaleString().toLocaleLowerCase();

    return value.filter(v => v.toLocaleLowerCase().indexOf(filter) !== -1);
  }

}
