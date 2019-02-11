import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args?: number) {
    if(!value)
      return null

    let actualLimit = (args) ? args : 40;
    return value.substr(0, actualLimit) + '...'
  }

}
