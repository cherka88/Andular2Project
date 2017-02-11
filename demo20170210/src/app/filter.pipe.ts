import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filtertype: string): any {
    switch (filtertype) {
      case "active":
        return value.filter(n=>!n.isDone);
      case "completed":
        return value.filter(n=>n.isDone);
      default:
        return value;
    }
  }

}
